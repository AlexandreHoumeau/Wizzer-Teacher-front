import { Button, PieChart, TagCourse } from "components/ui";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from "services/api";

const Home = () => {
  const [stats, setStats] = useState({});
  const [graphStats, setGraphStats] = useState();
  const [battle, setBattle] = useState();

  const fetchStats = async () => {
    try {
      const { statsReduce } = await api.axios.get(`/v1/user/stats`);
      setStats(statsReduce);
    } catch (error) {}
  };

  const fetchBattle = async () => {
    try {
      const data = await api.axios.get("/v1/user/session");
      if (data.session._id) {
        const { session } = await api.axios.get(
          `/v1/user/session/${data.session._id}/ranking`
        );
        setBattle(session);
      }
    } catch {}
  };

  useEffect(() => {
    setGraphStats([
      { name: "Exercice(s) fait", value: stats.exoDone },
      { name: "Exercice(s) bon", value: stats.goodExercices },
    ]);
  }, [stats]);

  useEffect(() => {
    fetchStats();
    fetchBattle();
  }, []);

  return (
    <div>
      <div className="xl:grid grid-cols-2 space-x-4 xl:space-x-8 font-raleway">
        <div className="">
          <div className="mb-10">
            <div className="text-3xl font-bold mb-8">Vos Modules</div>
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
          <div className="">
            <div className="text-3xl font-bold mb-8">Détail des modules</div>
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
              <div className="flex justify-center mt-10">
                <Button type="primary" text="Voir tout" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="text-3xl font-bold mb-8">Vos bonnes réponses</div>
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

          <div className="mt-10">
            <div className="text-3xl font-bold mb-8">Vos cours</div>
            <div className="bg-grey-light p-5 rounded-xl">
              <div className=" space-x-10 flex justify-center">
                {stats.randomExercice?.map((exercice) => (
                  <div className="bg-white p-8 rounded-xl">
                    <div className="flex">
                      <div className="bg-primary-light p-2 rounded-full text-primary">
                        {exercice.moduleTitle}
                      </div>
                    </div>
                    <div className="text-2xl my-6">{exercice.title}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-10">
                <Button type="primary" text="Voir les cours" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="text-3xl font-bold mb-8">Battle</div>
        <div className="bg-grey-light p-5 grid grid-cols-2 space-x-8 rounded-xl">
          <div className="max-h-96 overflow-scroll">
            {battle?.rank?.map((r, index) => (
              <div
                className="flex items-center p-2 bg-white space-x-4 rounded m-2"
                key={r._id}
              >
                <div className="text-3xl font-semibold">{index + 1}</div>
                <div>
                  {r.firstName} {r.lastName}
                </div>
              </div>
            ))}
          </div>

          <div className="items-center h-96 flex justify-center text-center">
            <div>
              <div className="text-lg">
                Sur {battle?.rank?.length} participants, vous êtes classé
              </div>
              <div className=" mb-5 text-6xl text-primary font-semibold">
                {battle?.userPosition}{battle?.userPosition === 1 ? 'er(e)' : 'ème'}
              </div>
              <Button text="Voir les autres battles" type="primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
