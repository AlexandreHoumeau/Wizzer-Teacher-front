import { Button, PieChart } from "components/ui";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import api from "services/api";

const UserOverview = () => {
  const history = useHistory()
  const { userId } = useParams();
  const [user, setUser] = useState();
  const [stats, setStats] = useState();
  const [displayModal, setDisplayModal] = useState(false);
  const [graphStats, setGraphStats] = useState();

  const removeUser = async () => {
    try {
      await api.axios.delete(`/v1/users/${userId}`)
      history.push('/app/admin/user')

    } catch (error) {}
  }

  const fetchUser = async () => {
    try {
      const { user } = await api.axios.get(`/v1/users/${userId}`);
      setUser(user);
    } catch (error) {}
  };

  const fetchStats = async () => {
    try {
      const { statsReduce } = await api.axios.get(`/v1/users/${userId}/stats`);
      setStats(statsReduce);
    } catch (error) {}
  };

  useEffect(() => {
    setGraphStats([
      { name: "Exercice(s) fait", value: stats?.exoDone },
      { name: "Exercice(s) bon", value: stats?.goodExercices },
    ]);
  }, [stats]);

  useEffect(() => {
    fetchUser();
    fetchStats();
  }, [userId]);

  return (
    <div className="font-raleway">
      {user && (
        <div>
          <div className="font-semibold text-3xl mb-5">
            {user.firstName} {user.lastName}
          </div>

          <div className="flex justify-between items-center bg-grey-light p-8 rounded-xl">
            <div className="flex items-center space-x-4">
              <img
                className="inline-block w-24 h-24 mr-4 rounded-full"
                src={user?.picture}
                alt=""
              />
              <div className="space-y-4">
                <div className="flex">
                  <div className="text-primary bg-primary-light p-2 rounded-full">
                    Dernière connexion{" "}
                    {format(new Date(user.lastLogin), "dd/MM")}
                  </div>
                </div>
                <div>{user.email}</div>
              </div>
            </div>
            <div onClick={() => setDisplayModal(true)} className="text-primary cursor-pointer font-semibold">
              Supprimer l'utilisateur
            </div>
          </div>

          <div className="xl:grid grid-cols-2 space-x-8 mt-10">
            <div className="mb-10">
              <div className="text-3xl font-bold mb-8">
                Modules de {user.firstName}
              </div>
              <div className="bg-grey-light p-8 space-x-10 rounded-xl grid grid-cols-2">
                <div className="bg-white p-8 rounded-xl">
                  <div className="text-center text-grey-dark text-xl">
                    Exercices fait
                  </div>
                  <div className="text-primary text-5xl font-bold text-center mt-4">
                    {stats?.exoDone}
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl">
                  <div className="text-center text-grey-dark text-xl">
                    Modules démarés
                  </div>
                  <div className="text-primary text-5xl font-bold text-center mt-4">
                    {stats?.moduleDone}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-3xl font-bold mb-8">
                Bonnes réponses de {user.firstName}
              </div>
              <div className="bg-grey-light pb-5 space-x-10 rounded-xl flex justify-center">
                {graphStats && (
                  <div className="items-baseline">
                    <PieChart data={graphStats} />
                    <div className="flex items-center space-x-8">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 rounded h-4 bg-primary" />
                        <div>Exercices bons</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 rounded h-4 bg-orange" />
                        <div>Exercices faits</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="">
            <div className="text-3xl font-bold mb-8">Détail des modules de {user.firstName}</div>
            <div className="bg-grey-light p-8 rounded-xl max-h-96 overflow-scroll">
              {stats?.modulesParticipation?.map((module) => (
                <div
                  key={module.id}
                  className="bg-white items-center py-5 px-10 flex justify-between m-2 rounded-xl"
                >
                  <div className="text-2xl font-semibold ">{module.title}</div>
                  <div className="text-grey-dark text-xl">
                    {(module.exerciceDone / module.exercices) * 100} %
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <Modal
        // className="rounded-3xl"
        ariaHideApp={false}
        style={customStyles}
        isOpen={displayModal}
        onRequestClose={() => setDisplayModal(false)}
        contentLabel="Example Modal"
      >
        <div className="p-5 text-center font-raleway space-y-8">
          <div className="text-3xl ">Êtes vous sur de vouloir supprimer cet utilisateur ?</div>
          <div>Vous ne pourrez pas revenir en arrière.</div>
          <div className="flex justify-center space-x-4">
            <Button type="primary" action={() => removeUser()} text="Supprimer" />
            <Button type="black" action={() => setDisplayModal(false)} text="Annuler" />
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default UserOverview;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 24,
    width: "35%",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
};