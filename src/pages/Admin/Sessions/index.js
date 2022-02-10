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
  const [fetchedDays, setFetchedDays] = useState([]);
  const [fetchedId, setFetchedId] = useState();

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

  const fetchSession = async () => {
    const data = await api.axios.get("v1/session");
    if (data?.session?.days) {
      console.log(data);
      setFetchedId(data.session._id);
      setFetchedDays(data.session.days);
      setStartDate(new Date(data.startAt));
      setEndDate(new Date(data.endAt));
    }
  };

  const handleSubmit = async () => {
    if (fetchedDays?.length) {
      const values = {
        days,
        sessionId: fetchedId,
      };
      await api.axios.put("v1/session", values);
    } else {
      await api.axios.post("v1/session", { days });
      fetchSession()
    }
  };

  const removeSession = async () => {
    await api.axios.delete(`v1/session/${fetchedId}`)
  }

  const removeCourse = (item, index) => {
    let tmp = [...days];
    tmp[index]._exercices = days[index]._exercices.filter(
      (course) => course._id !== item._id
    );
    setDays(tmp);
  };

  const addCourse = (data, index) => {
    if (!days[index]._exercices.find((course) => course._id === data._id)) {
      days[index]._exercices.push(data);
    }
  };

  useEffect(() => {
    fetchExercices();
    fetchSession();
  }, []);

  useEffect(() => {
    if (endDate && startDate) {
      if (fetchedDays?.length) {
        const tmp = [];
        fetchedDays.map((days) => {
          tmp.push({
            currentDay: new Date(days.currentDay),
            _exercices: days._exercices,
          });
        });
        setDays(tmp);
      } else {
        const diffDays = differenceInDays(endDate, startDate);
        const array = [];
        if (diffDays > 0) {
          for (let dayIndex = 0; dayIndex <= diffDays; dayIndex++) {
            const currentDay = add(startOfDay(startDate), { days: dayIndex });
            array.push({ currentDay });
            array[dayIndex]._exercices = [];
          }
        }
        setDays(array);
      }
    }
  }, [endDate]);

  return (
    <div>
      <div className="mb-10">
        <div className="font-bold text-3xl mb-3">Durée</div>
        <ReactDatePicker
          disabled={fetchedDays?.length}
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
            <div
              style={{ maxHeight: "65vh" }}
              className="bg-grey-light p-3 overflow-auto rounded space-y-4"
            >
              {exercices?.map((exercice) => (
                <Dragitem key={exercice._id} exercice={exercice} />
              ))}
            </div>
          </div>
          <div className="col-span-9">
            <div className="flex mb-3 justify-between items-center">
              <div className="font-bold text-3xl mb-3">Planning</div>
              <div className="flex">
                {fetchedDays?.length ? 
                  <Button
                    action={removeSession}
                    text={"Supprimer"}
                    type="black"
                  />
                : null}
                <div className="ml-3">
                  <Button
                    action={handleSubmit}
                    text={
                      fetchedDays?.length ? "Mettre à jour" : "Créer la session"
                    }
                    type="primary"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div
                style={{ maxHeight: "65vh" }}
                className="flex bg-grey-light rounded max-w-full overflow-auto"
              >
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
                        courses={day._exercices}
                        addCourse={addCourse}
                        removeCourse={(item, index) =>
                          removeCourse(item, index)
                        }
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
