import { Banner } from "components/modules";
import Card from "components/modules/Card";
import React, { useEffect, useState } from "react";
import api from "services/api";

const Modules = () => {
  const [modules, setModules] = useState({});
  const [todayExercices, setTodayExercices] = useState({});

  const fetchSession = async () => {
    const data = await api.axios.get("/v1/user/session");
    setTodayExercices(data.todayExercices);
  };

  const fetchModules = async () => {
    const data = await api.axios.get("/v1/user/modules");
    if (data) {
      setModules(data);
    }
  };

  useEffect(() => {
    fetchModules();
    fetchSession();
  }, []);

  return (
    <div className="font-raleway">
      <div>
        <Banner todayExercices={todayExercices} />
      </div>
      {modules.dev && (
        <div>
          <div className="text-3xl font-semibold mb-8">
            Modules developpement
          </div>
          <div className="flex">
            {modules.dev.map(
              (module) =>
                module._exercices.length > 0 && (
                  <Card key={module._id} module={module} />
                )
            )}
          </div>
        </div>
      )}

      {modules.design && (
        <div className="mt-10">
          <div className="text-3xl font-semibold mb-8">Modules design</div>
          <div className="flex">
            {modules.design.map(
              (module) =>
                module._exercices.length > 0 && (
                  <Card key={module._id} module={module} />
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modules;
