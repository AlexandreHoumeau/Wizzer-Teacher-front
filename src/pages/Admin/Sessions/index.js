import React, { useEffect, useState } from "react";

import ReactDatePicker from "react-datepicker";
import { add, differenceInDays, format, startOfDay } from "date-fns";
import classNames from "classnames";

import api from "services/api";
import "react-datepicker/dist/react-datepicker.css";

import Dragitem from "components/admin";
import DropItem from "components/admin/DropItem";
import { Button } from "components/ui";

const Session = () => {
  const [exercices, setExercices] = useState();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [days, setDays] = useState([]);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const fetchExercices = async () => {
    const data = await api.axios.get("v1/exercices");
    if (data?.exercices) {
      setExercices(data.exercices);
    }
  };

  const handleSubmit = async () => {
    await api.axios.post('v1/session', { days })
  }

  const removeCourse = (item, index) => {
    console.log(item)
    let tmp = [...days]
    tmp[index].courses = days[index].courses.filter((course) => course._id !== item._id)
    setDays(tmp)
  }

  const addCourse = (data, index) => {
    if (!days[index].courses.find((course) => course._id === data._id)) {
      days[index].courses.push(data);
    }
  };

  useEffect(() => {
    fetchExercices();
  }, []);

  useEffect(() => {
    if (endDate && startDate) {
      const diffDays = differenceInDays(endDate, startDate);
      const array = [];
      if (diffDays > 0) {
        for (let dayIndex = 0; dayIndex <= diffDays; dayIndex++) {
          const currentDay = add(startOfDay(startDate), { days: dayIndex });
          array.push({ currentDay });
          array[dayIndex].courses = [];
        }
      }
      setDays(array);
    }
  }, [endDate]);

  return (
    <div>
      <div className="mb-10">
        <div className="font-bold text-3xl mb-3">Durée</div>
        <ReactDatePicker
          className="border font-raleway rounded bg-grey-light p-3 w-1/5"
          placeholderText="Sélectionner une période"
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
        />
      </div>

      <div>
        <div className="grid grid-cols-12 space-x-8 font-raleway">
          <div className="col-span-3">
            <div className="font-bold text-3xl mb-9">Cours</div>
            <div style={{ maxHeight: '65vh'}} className="bg-grey-light p-3 overflow-auto rounded space-y-4">
              {exercices?.map((exercice) => (
                <Dragitem key={exercice._id} exercice={exercice} />
              ))}
            </div>
          </div>
          <div className="col-span-9">
            <div className="flex mb-3 justify-between items-center">
              <div className="font-bold text-3xl mb-3">Planning</div>
              <Button action={handleSubmit} text="Créer la session" type="primary" />
            </div>
            <div className="flex">
              <div style={{ maxHeight: '65vh'}} className="flex bg-grey-light rounded max-w-full overflow-auto">
                {days.length ? (
                  days.map((day, index) => (
                    <div key={day.currentDay}>
                      <div
                        className={classNames(
                          "py-5 px-20 border-b",
                          index === 0 ? "" : "border-l"
                        )}
                      >
                        <div className="text-center text-5xl font-semibold text-primary">
                          {format(day.currentDay, "dd")}
                        </div>
                        <div className="text-center">
                          {format(day.currentDay, "EEE")}
                        </div>
                      </div>
                      <DropItem
                        courses={day.courses}
                        addCourse={addCourse}
                        removeCourse={(item, index) => removeCourse(item, index)}
                        index={index}
                      />
                    </div>
                  ))
                ) : (
                  <p className="p-3 text-grey-dark italic">
                    Aucune période de session sélectionné
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Session;
