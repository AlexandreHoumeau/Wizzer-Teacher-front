import classNames from "classnames";
import { Table } from "components/ui";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import api from "services/api";

const columns = [
  {
    title: "Rank",
    dataIndex: "rank",
    key: "rank",
    render: (index) => (
      <div className="flex items-center font-normal">
        <div>{index}</div>
      </div>
    ),
  },
  {
    title: "Utilisateur",
    dataIndex: "user",
    key: "user",
    render: (user) => (
      <div className="flex items-center font-normal space-x-2">
        <img
          className="inline-block w-10 h-10 mr-4 rounded-full"
          src="https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
          alt=""
        />
        <div>{user.firstName}</div>
        <div>{user.lastName}</div>
      </div>
    ),
  },
  {
    title: "Pourcentage de participation",
    dataIndex: "participation",
    key: "participation",
    render: (percent) => <div className="font-normal">{percent} %</div>,
  },
  {
    title: "Note total",
    dataIndex: "score",
    key: "score",
  },
];

const History = () => {
  const [sessionList, setSessionList] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [ranking, setRanking] = useState([]);
  const [sessionInfo, setSessionInfo] = useState();

  const listBattle = async () => {
    try {
      const { sessions } = await api.axios.get("/v1/user/session/list");
      setSessionList(sessions.reverse());
      setSelectedSession(sessions[0]);
    } catch (error) {}
  };

  const fetchRanking = async () => {
    try {
      const { session } = await api.axios.get(
        `/v1/user/session/${selectedSession._id}/ranking`
      );
      setSessionInfo(session);
    } catch (error) {}
  };

  useEffect(() => {
    const arrayRank = sessionInfo?.rank.map((r, index) => ({
      rank: index + 1,
      user: {
        firstName: r.firstName,
        lastName: r.lastName,
        picture: r.picture,
      },
      participation: Math.round(
        (r.userParticipation / sessionInfo.totalTests) * 100
      ),
      score: r.userScore,
    }));
    setRanking(arrayRank);
  }, [sessionInfo]);

  useEffect(() => {
    fetchRanking();
  }, [selectedSession]);

  useEffect(() => {
    listBattle();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-12 space-x-8 font-raleway">
        <div className="col-span-4">
          <div
            style={{ maxHeight: "65vh" }}
            className="bg-grey-light p-3 overflow-auto rounded space-y-4"
          >
            <div className="text-xl font-semibold">Hstorique des battles</div>
            {sessionList.map((session) => (
              <div
                onClick={() => setSelectedSession(session)}
                className={classNames(
                  "bg-white my-2 rounded p-5 cursor-pointer",
                  selectedSession._id === session._id && "border-primary border"
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
                      new Date(
                        session.days[session.days.length - 1].currentDay
                      ),
                      "dd/MM/yyyy"
                    )}
                  </div>
                </div>
                <div
                  className={classNames(
                    session.isOnline && "text-primary font-bold"
                  )}
                >
                  {session.isOnline ? "En ligne" : "Hors ligne"}
                </div>
              </div>
            ))}
          </div>
        </div>
        {ranking?.length > 0 && (
          <div
            style={{ maxHeight: "65vh" }}
            className="flex p-5  rounded max-w-full col-span-8"
          >
            <div className="bg-grey-light">
              <div className="font-semibold p-5 mb-4 text-3xl">Classement</div>
              <Table dataSource={ranking} columns={columns} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
