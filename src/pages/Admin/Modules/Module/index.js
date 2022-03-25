import { GithubIcon, PencilIcon, RecycleBinIcon } from "assets/icons";
import classNames from "classnames";
import { Button, Select, Table, Tag, TagCourse } from "components/ui";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import api from "services/api";

const ModuleOverview = () => {
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
      render: (value) => <p className="ml-3">{value}</p>,
    },
    {
      title: "Difficulté",
      dataIndex: "difficulty",
      key: "difficulty",
      render: (value) => (
        <div className="flex">
          <TagCourse type={value} />
        </div>
      ),
    },
    {
      title: "Battle",
      dataIndex: "battle",
      key: "battle",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (value) => (
        <div className="flex ml-1 space-x-2">
          <RecycleBinIcon
            className="cursor-pointer"
            onClick={() => deleteExercice(value)}
          />
          <PencilIcon
            fill="#232324"
            width="20"
            className="cursor-pointer"
            onClick={() => updateExercice(value)}
          />
        </div>
      ),
    },
  ];
  const { id } = useParams();
  const [module, setModule] = useState();
  const [moduleID, setModuleID] = useState();
  const history = useHistory();
  const [exercices, setExercices] = useState([]);
  const [tests, setTests] = useState([]);

  const [params] = useState({
    $filter: {
      _module: id,
      status: { $in: ['pending', null]},
    },
    $populate: [
      {
        path: "_module",
        select: "title",
      },
      {
        path: "_exercice",
        select: "title points",
      },
      {
        path: "_user",
        select: "firstName lastName",
      },
    ],
  });

  const deleteExercice = async (exerciceId) => {
    await api.axios.delete(`/v1/exercices/${exerciceId}`);
    fetchModule();
  };

  const setPoints = (value, index) => {
    let newArr = [...tests];
    newArr[index].score = value;
    setTests(newArr);
  };

  const updateExercice = (id) => {
    history.push(
      `/app/admin/modules/${window.location.pathname
        .split("/")
        .pop()}/edit/${id}`
    );
  };
  const fetchModule = async () => {
    if (moduleID) {
      const data = await api.axios.get(`/v1/modules/${moduleID}`);
      if (data) {
        setModule(data.modules);
        setExercices(data._exercices);
      }
    }
  };

  const correctTest = async (test) => {
    try {
      await api.axios.put(`/v1/tests/${test._id}`, {test})
    } finally {
      fetchTests()
    }
  }

  const fetchTests = async () => {
    try {
      const { tests } = await api.axios.get("/v1/tests", { params });
      setTests(tests.sort((a, b) => ('' + a._exercice.title).localeCompare(b._exercice.title)))
    } catch {}
  };

  useEffect(() => {
    setModuleID(window.location.pathname.split("/").pop());
  }, []);

  useEffect(() => {
    fetchModule();
    fetchTests();
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

      <div className="mt-10 font-raleway">
        <div className="font-raleway mb-5 font-bold text-3xl">Exercice(s) à corriger</div>
        <div className="grid font-semibold text-grey-dark grid-cols-5 rounded-t border-b-2 bg-grey-light pl-3 p-2">
          <div>Exercice</div>
          <div>Utilisateur</div>
          <div>Repo Github</div>
          <div>Points de l'exercice</div>
          <div>Action</div>
        </div>
        {tests.length > 0 ? (
          tests.map((test, index) => (
            <div
              className={classNames(
                "p-2 grid grid-cols-5 items-center rounded",
                index % 2 === 0 ? "bg-grey-light" : ""
              )}
              key={test.id}
            >
              <div>{test._exercice.title}</div>
              <div className="font-semibold">
                {test._user.firstName} {test._user.lastName}
              </div>
              <a
                className=""
                target="_blank"
                rel="noreferrer"
                href={test.repository}
              >
                <GithubIcon color="black" />
              </a>
              <Select
                action={(value) => setPoints(value, index)}
                className="w-2/3"
                placeholder="Point de l'exercice"
                values={Array.from(
                  { length: test._exercice.points + 1 },
                  (x, i) => i
                )}
              />
              <div className="flex">
                <Button action={() => correctTest(test)} type="primary" text="Valider" />
              </div>
            </div>
          ))
        ) : (
          <div>Aucun exercices à corriger</div>
        )}
      </div>
    </div>
  );
};

export default ModuleOverview;
