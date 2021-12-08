import { Button, Table } from "components/ui";
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
    title: "Statut",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Battle",
    dataIndex: "battle",
    key: "battle",
  },
];

// const dataSource = [
// {
//   key: "1",
//   title: "Mike",
//   points: 32,
//   status: "10 Downing Street",
// },
// {
//   key: "2",
//   title: "John",
//   points: 42,
//   status: "10 Downing Street",
//   battle: "10 Downing Street",
// },
// ];

const ModuleOverview = () => {
  const [module, setModule] = useState()
  const [moduleID, setModuleID] = useState()
  const history = useHistory()

  const fetchModule = async () => {
    const data = await api.axios.get(
      `/v1/modules/${moduleID}`
    );
    if (data) {
      setModule(data.module);
    }
  };
  
  useEffect(() => {
    setModuleID( window.location.pathname.split("/").pop())
  }, [])

  useEffect(() => {
    fetchModule();
  }, [moduleID]);

  return (
    <div>
      <div className="mb-10 flex items-center justify-between">
        <div className="font-raleway font-bold text-3xl">{module?.title}</div>
        <Button text="Créer un cours" action={() => history.push(`/app/admin/modules/${window.location.pathname.split("/").pop()}/new`)} type="primary" />
      </div>
      <Table dataSource={module?._exercices || []} columns={columns} />
    </div>
  );
};

export default ModuleOverview;
