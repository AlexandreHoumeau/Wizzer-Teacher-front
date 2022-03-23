import { Table } from "components/ui";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
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

const Ranking = ({ sessionId, user }) => {
  const [session, setSession] = useState();
  const [rank, setRank] = useState();
  const { battleId } = useParams()

  const fetchRanking = async () => {
    try {
      const { session } = await api.axios.get(
        `/v1/user/session/${sessionId || battleId}/ranking`
      );
      setSession(session);
    } catch (error) {}
  };

  useEffect(() => {
    fetchRanking();
  }, []);

  useEffect(() => {
    const arrayRank = session?.rank.map((r, index) => ({
      rank: index + 1,
      user: {
        firstName: r.firstName,
        lastName: r.lastName,
        picture: r.picture,
      },
      participation: Math.round(
        (r.userParticipation / session.totalTests) * 100
      ),
      score: r.userScore,
    }));
    setRank(arrayRank);
  }, [session]);

  return (
    <div>
      <div className="bg-primary-light rounded-xl p-7">
        <div className="font-semibold text-2xl">Votre classement</div>
        <div className="flex mt-5 items-center justify-between">
          <div className="text-center">
            <div className="text-grey-dark font-medium">Rank</div>
            <div className="text-primary text-2xl font-semibold mt-1">
              {session?.userPosition}
            </div>
          </div>

          <div className="">
            <div className="text-grey-dark font-medium">Utilisateur</div>
            <div className="mt-1">
              {user.firstName} {user.lastName}
            </div>
          </div>

          <div className="">
            <div className="text-grey-dark font-medium">
              Pourcentage de cours suivi
            </div>
            <div className="text-2xl font-medium mt-1">
              {Math.round(
                (session?.userParticipation / session?.totalTests) * 100
              )}
              %
            </div>
          </div>

          <div className="">
            <div className="text-grey-dark font-medium">Note total</div>
            <div className="text-2xl font-medium mt-1">
              {session?.userScore}/{session?.totalScore}
            </div>
          </div>
        </div>
      </div>

      {rank?.length > 0 && (
        <div className="bg-grey-light rounded-md mt-10">
          <div className="p-5 font-semibold mb-4 text-3xl">Classement</div>
          <Table dataSource={rank} columns={columns} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.Auth.user,
});

export default connect(mapStateToProps)(Ranking);
