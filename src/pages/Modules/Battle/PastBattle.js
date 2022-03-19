import classNames from "classnames";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "services/api";

const PastBattle = () => {
  const [sessions, setSessions] = useState([]);
  const history = useHistory()

  const fetchSessions = async () => {
    try {
      const { sessions } = await api.axios.get("/v1/user/session/list");
      setSessions(sessions.reverse());
    } catch {}
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  return (
    <div className="">
      {sessions?.length > 0 && (
        <div className="grid grid-cols-3 space-x-4">
          {sessions?.map((session) => (
            <div
              onClick={() => history.push(`battle/old/${session._id}`)}
              className={classNames(
                "bg-grey-light my-2 rounded p-5 cursor-pointer",
                session.isOnline && "border-green-500 border"
              )}
              key={session._id}
            >
              <div className="flex space-x-4">
                <div>Du</div>
                <div className="font-semibold">
                  {format(new Date(session.days[0].currentDay), "dd/MM/yyyy")}
                </div>
                <div>au</div>
                <div className="font-semibold">
                  {format(
                    new Date(session.days[session.days.length - 1].currentDay),
                    "dd/MM/yyyy"
                  )}
                </div>
              </div>
              <div
                className={classNames(
                  session.isOnline && "text-green-500 font-bold"
                )}
              >
                {session.isOnline ? "En ligne" : "Hors ligne"}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PastBattle;
