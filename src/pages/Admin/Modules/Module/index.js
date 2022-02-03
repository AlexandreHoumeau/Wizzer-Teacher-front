import { Button, Table, Tag, TagCourse } from "components/ui";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import api from "services/api";

const columns = [
  {
    title: "Titre du cours",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Points",
    dataIndex: "points",
    key: "points",
  },
  {
    title: "Difficulté",
    dataIndex: "difficulty",
    key: "difficulty",
    render: (value) => (
      <div className="flex">
      <TagCourse type={value} />
      </div>
    )
  },
  {
    title: "Battle",
    dataIndex: "battle",
    key: "battle",
  },
];

const ModuleOverview = () => {
  const [module, setModule] = useState();
  const [moduleID, setModuleID] = useState();
  const history = useHistory();
  const [exercices, setExercices] = useState([]);

  const fetchModule = async () => {
    if (moduleID) {
      const data = await api.axios.get(`/v1/modules/${moduleID}`);
      if (data) {
        setModule(data.modules);
        setExercices(data._exercices);
      }
    }
  };

  useEffect(() => {
    setModuleID(window.location.pathname.split("/").pop());
  }, []);

  useEffect(() => {
    fetchModule();
  }, [moduleID]);

  return (
    <div>
      <div className="mb-10 flex items-center justify-between">
        <div className="font-raleway font-bold text-3xl">{module?.title}</div>
        <Button
          text="Créer un cours"
          action={() =>
            history.push(
              `/app/admin/modules/${window.location.pathname
                .split("/")
                .pop()}/new`
            )
          }
          type="primary"
        />
      </div>
      {module && <Table dataSource={exercices} columns={columns} />}
    </div>
  );
};

export default ModuleOverview;
