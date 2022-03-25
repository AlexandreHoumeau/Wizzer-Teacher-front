import React, { useEffect, useState } from "react";

import classNames from "classnames";
import { useParams, useHistory } from "react-router-dom";

import { TagCourseExo } from "components/modules";
import { Button, Progress, TagCourse } from "components/ui";

import api from "services/api";
import { ErrorIcon, SuccesIcon, WaitingIcon } from "assets/icons";

const ModuleOverview = () => {
  const history = useHistory();
  const [module, setModule] = useState();
  const [exercices, setExercices] = useState([]);
  const { moduleId } = useParams();
  const [params] = useState({
    $filter: {
      _module: moduleId
    },
    $populate: [
      {
        path: "_module",
        select: "title",
      }, {
        path: "_tests"
      }
    ],
  })
  const fetchModule = async () => {
    try {
      const { exercices } = await api.axios.get('/v1/user/exercice', { params })
      console.log(exercices)
      setExercices(exercices)
      setModule(exercices[0].module)
    } catch (error) {}
    // const data = await api.axios.get(`/v1/user/modules/${moduleId}`);
    // if (data?.module) {
    //   setModule(data.module);
    //   setExercices(data.exercices);
    // }
  };
  
  const handleSublmit = async (exerciceId) => {
    const test = {
      _exercice: exerciceId,
      _module: moduleId,
    };

    const data = await api.axios.post("/v1/user/test", test);
    if (data?.test) {
      history.push(`/app/modules/${moduleId}/${data.test._id}`);
    }
  };

  const renderButton = (exercice) => {
    if (exercice?.test?._id) {
      return (
        <Button
          text={exercice?.test?.status ? "Revoir" : "Continuer"}
          type="black"
          action={() =>
            history.push(`/app/modules/${moduleId}/${exercice.test._id}`)
          }
        />
      );
    } else {
      return (
        <Button
          action={() => handleSublmit(exercice._id)}
          text="Commencer"
          type="primary"
        />
      );
    }
  };

  const renderStatus = (status) => {
    switch (status) {
      case "passed":
        return <SuccesIcon />;

      case "refused":
        return <ErrorIcon />;

      case "pending":
        return <WaitingIcon className=""/>;

      default:
        return <WaitingIcon className=""/>;
    }
  };

  useEffect(() => {
    fetchModule();
  }, []);

  return (
    <div className="font-raleway">
      {module && (
        <div>
          <div className="bg-grey-light p-8 rounded-3xl">
            <div className="flex justify-between">
              <div className="flex items-center">
                <div className="text-2xl font-semibold mr-4">
                  Module: {module}
                </div>

              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="text-xl mb-8">Liste des cours</div>

            <div className="grid grid-cols-5 grid-flow-row-dense gap-6	">
              {exercices.map((exercice, index) => (
                <div
                  key={index}
                  className={classNames(
                    exercice.test?._id ||
                      index === 0 ||
                      exercices[index - 1]?.test?._id
                      ? ""
                      : "opacity-50",
                    "col-span-1 rounded-3xl p-8 bg-grey-light"
                  )}
                >
                  <div className="flex">
                    <TagCourseExo title={exercice.difficulty} />
                  </div>

                  <div className="my-6">
                    <div>Valeur de l'exercice:</div>
                    <div className="text-primary text-xl">
                      {exercice.points}
                      {exercice.points > 1 ? "points" : "point"}
                    </div>
                  </div>
                  <div className="text-xl mb-10 font-semibold">
                    {exercice.title}
                  </div>
                  <div className="flex items-center justify-between">
                    {exercice.test?._id ||
                    index === 0 ||
                    exercices[index - 1]?.test?._id
                      ? renderButton(exercice)
                      : null}
                      
                    {exercice?.test?.status && renderStatus(exercice.test.status)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModuleOverview;
