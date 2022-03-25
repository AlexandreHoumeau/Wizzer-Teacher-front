import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "services/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Home = () => {
  const history = useHistory();
  const [tests, setTests] = useState([]);
  const [rank, setrank] = useState([]);
  const [todayExercices, setTodayExercice] = useState([]);
  const [chartData, setChartData] = useState([]);

  const fetchBattle = async () => {
    try {
      const data = await api.axios.get("/v1/user/session");
      setTodayExercice(data.todayExercices);
    } catch (error) {}
  };

  const fetchStats = async () => {
    try {
      const { tests, rank } = await api.axios.get("/v1/stats");
      setTests(tests);
      setrank(rank);
    } catch (error) {}
  };

  useEffect(() => {
    const array = tests.map((test) => ({
      name: test.moduleTitle,
      value: test.value,
    }));
    setChartData(array);
  }, [tests]);

  useEffect(() => {
    fetchBattle();
    fetchStats();
  }, []);

  return (
    <div className="font-raleway">
      {todayExercices?.length > 0 && (
        <div>
          <div className="flex items-center justify-between">
            <div className="font-semibold text-3xl mb-5">
              Les exercices du jour
            </div>
            <div
              onClick={() => history.push("/app/admin/battle")}
              className="cursor-pointer text-xl text-primary font-semibold"
            >
              Modifier
            </div>
          </div>
          <div className=" flex overflow-x-scroll bg-grey-light p-8 min-w-full  rounded">
            {todayExercices?.map((exercice, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl flex-shrink-0 w-72 px-8 py-6 mr-6"
              >
                <div className="flex">
                  <div className="bg-primary-light px-3 py-1 text-primary mb-5 rounded-3xl">
                    {exercice.moduleTitle}
                  </div>
                </div>
                <div className="text-xl">{exercice.title}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid space-x-4 grid-cols-2 mt-10">
        <div>
          <div>
            <div className="font-semibold text-3xl mb-5">
              Exercices à corriger
            </div>
            <div className="bg-grey-light rounded p-5">
              {tests?.length ? (
                <div className="bg-white rounded space-y-4 p-5">
                  {tests.map((test, index) => (
                    <div
                      onClick={() => history.push(`/app/admin/modules/${test.moduleId}`)}
                      className="bg-white cursor-pointer rounded grid grid-cols-3 space-x-4"
                      key={test.moduleId}
                    >
                      <div className="col-span-1 font-semibold">
                        {test.moduleTitle}
                      </div>
                      <div
                        style={{
                          width: `${(test.value / tests[0].value) * 100}%`,
                        }}
                        className={classNames(
                          index % 2 === 0 ? "bg-purple-light" : "bg-grey-light",
                          "col-span-2 rounded-xl pl-5 p-2"
                        )}
                      >
                        {test.value}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-grey-dark italic text-center">Pas d'exercice à corriger</div>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="font-semibold text-3xl mb-5">Battle classement</div>
          <div className="bg-grey-light max-h-96 overflow-scroll space-y-4 p-5 rounded">
            {rank.map((r, index) => (
              <div
                className="flex space-x-4 items-center bg-white p-5 rounded-2xl"
                key={r._id}
              >
                <div className="font-semibold text-3xl">{index + 1}</div>
                <div>
                  {r.firstName} {r.lastName}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="font-semibold text-3xl mb-5">Participation aux modules</div>
          <div className="bg-grey-light justify-center flex max-h-96 overflow-scroll space-y-4 p-5 rounded">
            {chartData?.length > 0 && (
              <div className="bg-white p-5 rounded">
                <BarChart
                  width={500}
                  height={300}
                  data={chartData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#ECF0FD" />
                </BarChart>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
