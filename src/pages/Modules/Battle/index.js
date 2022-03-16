import React, { useEffect, useState } from "react";

import { endOfDay, formatDuration, intervalToDuration } from "date-fns";
import { useHistory } from "react-router";

import { Button, Table, Tag } from "components/ui";
import api from "services/api";
import { fr } from "date-fns/locale";

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
    title: "Points",
    dataIndex: "points",
    key: "points"
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

const Battle = () => {
  const [exercices, setExercices] = useState([]);
  const [end, setEnd] = useState(endOfDay(Date.now()));
  const [duration, setDuration] = useState();
  const history = useHistory()

  const fetchBattle = async () => {
    try {
      const { todayExercices } = await api.axios.get("/v1/user/session");
      formatData(todayExercices);
    } catch (error) {}
  };

  const formatData = (exercices) => {
    const data = [];

    for (const exercice of exercices) {
      data.push({
        title: exercice.title,
        moduleTitle: exercice._module.title,
        points: exercice.points,
        difficulty:
          exercice.difficulty === "easy"
            ? "success"
            : exercice.difficulty === "medium"
            ? "waiting"
            : "error",
        status: {
          type: exercice.isDone,
          id: exercice._id,
          action: () => history.push(`battle/${exercice._id}`)
        },
      });
    }
    setExercices(data);
  };

  useEffect(() => {
    fetchBattle();
  }, []);

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
  }, []);

  return (
    <div className="font-raleway">
      <div className="flex space-x-4 mb-4">
        <div className="bg-primary text-white text-lg font-medium rounded-lg px-4 py-2 cursor-pointer">Cours de la battle</div>
        <div className="bg-grey-light rounded-lg text-lg font-medium px-4 py-2 cursor-pointer">Classement de la battle</div>
        <div className="bg-grey-light rounded-lg text-lg font-medium px-4 py-2 cursor-pointer">Historique des battles</div>
      </div>
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

export default Battle;
