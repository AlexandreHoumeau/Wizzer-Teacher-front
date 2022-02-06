import React, { useEffect } from "react";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useDrag, useDrop } from "react-dnd";
import api from "services/api";
import "react-datepicker/dist/react-datepicker.css";
import {
  add,
  differenceInCalendarDays,
  differenceInDays,
  format,
  startOfDay,
} from "date-fns";
import classNames from "classnames";
import Dragitem from "components/admin";
import DropItem from "components/admin/DropItem";

const Session = () => {
  const [exercices, setExercices] = useState();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [days, setDays] = useState([]);

  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type: 'BOX',
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))


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
          calendarClassName=""
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
        <div className="grid grid-cols-5 space-x-8 font-raleway">
          <div className="col-span-1">
            <div className="font-bold text-3xl mb-3">Cours</div>
            <div ref={dragPreview}  className="bg-grey-light p-3 overflow-auto rounded space-y-4">
              {exercices?.map((exercice) => (
                <Dragitem exercice={exercice} />
              ))}
            </div>
          </div>
          <div className="col-span-4">
            <div className="font-bold text-3xl mb-3">Planning</div>
            <div className="flex bg-grey-light rounded max-w-full overflow-auto">
              {days.length ? (
                days.map((day, index) => (
                  <div key={day.currentDay}>
                    <div className={classNames('py-5 px-20 border-b', index === 0 ? '' : 'border-l' )}>
                      <div className="text-center text-5xl font-semibold text-primary">
                        {format(day.currentDay, "dd")}
                      </div>
                      <div className="text-center">
                        {format(day.currentDay, "EEE")}
                      </div>
                    </div>
                    <DropItem index={index} />
                  </div>
                ))
              ) : (
                <p className="p-3">Aucune période de session sélectionné</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Session;
