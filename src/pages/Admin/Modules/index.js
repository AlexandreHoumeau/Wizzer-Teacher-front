import React, { useEffect, useState } from "react";
import { Button, CardModule } from "components/ui";
import { LeftArrowIcon, RightArrowIcon } from "assets/icons";
import { useHistory } from "react-router";
import api from "services/api";

const Modules = () => {
  const history = useHistory();
  const [modules, setModules] = useState({
    dev: [],
    design: [],
  });
  const fetchModules = async () => {
    const { dev, design } = await api.axios.get("/v1/modules");

    setModules({
      ...modules,
      dev,
      design,
    });
  };

  useEffect(() => {
    fetchModules();
  }, []);

  return (
    <div className="w-full">
      {modules.design?.length ? (
        <div>
          <div className="flex justify-between items-center">
            <div className="font-raleway font-bold text-3xl">
              Cours de Webdesign
            </div>
            <div className="flex items-center">
              <LeftArrowIcon />
              <RightArrowIcon className="mr-12" />
              <Button
                action={() => history.push("/app/admin/modules/new")}
                text="Créer un module"
                type="primary"
              />{" "}
            </div>
          </div>
          <div className="flex w-full overflow-y-auto mt-10 pb-4">
            {modules.design.map((module) => (
              <CardModule module={module} />
            ))}
          </div>
        </div>
      ) : null}
      {modules.dev?.length ? (
        <div>
          <div className="flex justify-between items-center">
            <div className="font-raleway font-bold text-3xl">
              Cours de Développement
            </div>
            <div className="flex items-center">
              <LeftArrowIcon />
              <RightArrowIcon className="mr-12" />
              <Button
                action={() => history.push("/app/admin/modules/new")}
                text="Créer un module"
                type="primary"
              />{" "}
            </div>
          </div>
          <div className="flex w-full overflow-y-auto mt-10 pb-4">
            {modules.dev.map((module) => (
              <CardModule module={module} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modules;
