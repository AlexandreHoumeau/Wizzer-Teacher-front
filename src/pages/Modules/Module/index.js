import React, { useEffect, useState } from "react";

import classNames from "classnames";
import { useParams, useHistory } from "react-router-dom";

import { TagCourseExo } from "components/modules";
import { Button, Progress, TagCourse } from "components/ui";

import api from "services/api";

const ModuleOverview = () => {
  const history = useHistory()
  const [module, setModule] = useState();
  const [exercices, setExercices] = useState([]);
  const { moduleId } = useParams();

  const fetchModule = async () => {
    const data = await api.axios.get(`/v1/user/modules/${moduleId}`);
    if (data?.module) {
      setModule(data.module)
      setExercices(data.exercices)
      console.log(data.exercices)
    }
  };

  const handleSublmit = async (exerciceId) => {
    // create test
    const test = {
      _exercice: exerciceId,
      _module: moduleId,
    }

    const data = await api.axios.post('/v1/user/test', test)
    if (data?.test) {
      console.log(data.test)
      history.push(`/app/modules/${moduleId}/${data.test._id}`)
    }
  }

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
                  Module: {module.title}
                </div>
                <div className="flex">
                  <TagCourse
                    type={module._exercices.length === 0 ? "error" : "primary"}
                    title={`${module._exercices.length} cours`}
                  />
                </div>
              </div>
              <Progress total={module._exercices.length} current={0} />
            </div>
          </div>

          <div className="mt-10">
            <div className="text-xl mb-8">Liste des cours</div>

            <div className="grid grid-cols-5 grid-flow-row-dense gap-6	">
              {exercices.map((exercice, index) => (
                <div
                  key={index}
                  className={classNames(
                    exercice.test || index === 0 || module._exercices[index - 1]?.test  ? '' : 'opacity-50', 
                    "col-span-1 rounded-3xl p-8 bg-grey-light"
                  )}
                >
                  <div className="flex">
                    <TagCourseExo title={exercice.difficulty} />
                  </div>

                  <div className="my-6">
                    <div>Valeur de l'exercice:</div>
                    <div className="text-primary text-xl">{exercice.points} {exercice.points > 1 ? 'points': 'point'}</div>
                  </div>
                  <div className="text-xl mb-10 font-semibold">{exercice.title}</div>
                  {exercice.test || index === 0 || module._exercices[index - 1]?.test ? (
                    <Button action={() => handleSublmit(exercice._id)} text="Commencer" type="primary" />
                  ): null}
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
