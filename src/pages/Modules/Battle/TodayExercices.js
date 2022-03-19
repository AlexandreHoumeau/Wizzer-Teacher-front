import { Button, Table, Tag } from "components/ui";
import { endOfDay, formatDuration, intervalToDuration } from "date-fns";
import { fr } from "date-fns/locale";
import React, { useEffect, useState } from "react";

const columns = [
  {
    title: "Titre du cours",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Titre du module",
    dataIndex: "moduleTitle",
    key: "moduleTitle",
  },
  {
    title: "Difficulté",
    dataIndex: "difficulty",
    key: "difficulty",
    render: (value) => (
      <div className="flex">
        <Tag type={value} />
      </div>
    ),
  },
  {
    title: "Points",
    dataIndex: "points",
    key: "points",
  },
  {
    title: "Statut",
    dataIndex: "status",
    key: "status",
    render: (value) =>
      value.type ? (
        <Button action={value.action} type="black" text="Revoir" />
      ) : (
        <Button action={value.action} type="primary" text="Commencer" />
      ),
  },

];

const TodayExercices = ({ exercices }) => {
  const [duration, setDuration] = useState();
  const [end] = useState(endOfDay(Date.now()));

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration(
        intervalToDuration({
          start: Date.now(),
          end,
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [exercices]);

  return (
    <div className="mt-10">
      <div className=" flex items-center mb-10">
        <div className="text-3xl font-bold">La battle du jour</div>
        {duration && (
          <div className="text-md ml-5 font-semibold bg-purple-400 text-white py-2 p-4 rounded">
            {formatDuration(duration, { locale: fr })}
          </div>
        )}
      </div>
      {exercices?.length > 0 && (
        <Table dataSource={exercices} columns={columns} />
      )}
    </div>
  );
};

export default TodayExercices;
