import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import api from "services/api";
import PastBattle from "./PastBattle";
import Ranking from "./Ranking";
import TodayExercices from "./TodayExercices";

const Battle = () => {
  const [exercices, setExercices] = useState([]);
  const [session, setSession] = useState(null);
  const [view, setView] = useState("todayExercices");
  const history = useHistory();

  const fetchBattle = async () => {
    try {
      const { todayExercices, session } = await api.axios.get(
        "/v1/user/session"
      );
      console.log('Hello Woerld')

      if (!session) {
        setView("history");
      }
      formatData(todayExercices);
      setSession(session);

    } catch (error) {}
  };

  const formatData = (exercices) => {
    const data = [];

    for (const exercice of exercices) {
      data.push({
        ...exercice,
        status: {
          ...exercice.status,
          action: () => history.push(`battle/${exercice.status.id}`),
        },
      });
    }
    setExercices(data);
  };

  useEffect(() => {
    fetchBattle();
  }, []);

  return (
    <div className="font-raleway">
      <div className="flex space-x-4 mb-4">
        {exercices?.length > 0 && (
          <div
            onClick={() => setView("todayExercices")}
            className={classNames(
              "text-lg font-medium rounded-lg px-4 py-2 cursor-pointer",
              view === "todayExercices"
                ? "bg-primary text-white"
                : "bg-grey-light text-black"
            )}
          >
            Cours de la battle
          </div>
        )}
        {session && (
          <div
            onClick={() => setView("onGoingBattle")}
            className={classNames(
              "text-lg font-medium rounded-lg px-4 py-2 cursor-pointer",
              view === "onGoingBattle"
                ? "bg-primary text-white"
                : "bg-grey-light text-black"
            )}
          >
            Classement de la battle
          </div>
        )}
        <div
          onClick={() => setView("history")}
          className={classNames(
            "text-lg font-medium rounded-lg px-4 py-2 cursor-pointer",
            view === "history"
              ? "bg-primary text-white"
              : "bg-grey-light text-black"
          )}
        >
          Historique des battles
        </div>
      </div>
      {view === "todayExercices" && <TodayExercices exercices={exercices} />}
      {view === "onGoingBattle" && <Ranking sessionId={session._id} />}
      {view === "history" && <PastBattle />}
    </div>
  );
};

export default Battle;
