import React, { useState } from "react";
import { Input, Button } from "components/ui";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ErrorIcon, SuccesIcon } from "assets/icons";
import { useEffect } from "react";
import api from "services/api";
import { useHistory } from "react-router";

let step = [];
const NewModule = () => {
  const history = useHistory()
  const [progress, setProgress] = useState(0);
  const [validTitle, setValidTitle] = useState(null);
  const [modules, setModules] = useState([]);
  const [module, setModule] = useState({
    title: "",
    description: "",
    type: "",
  });

  const handleSubmit = async () => {
    try {
      const { $message } = await api.axios.post('/v1/modules', module)
      if ($message) {
        history.push('/app/admin/modules')
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (modules.find((el) => el.title === module.title)) {
      setValidTitle(false);
    } else {
      setValidTitle(true);
      if (!module.title) {
        setValidTitle(null);
      }
    }

    for (const property in module) {
      if (module[property]) {
        if (!step.includes(property)) {
          if (property !== "title") {
            step.push(property);
          }
          if (property === "title" && validTitle) {
            step.push(property);
          }
        }
      } else {
        step = step.filter((e) => e !== property);
      }
    }

    setProgress(Math.round((step.length / 3) * 100));
  }, [module]);

  const handleChange = (e) => {
    setModule({ ...module, [e.target.name]: e.target.value });
  };

  return (
    <div className="lg:grid grid-cols-5 gap-4">
      <div className=" p-5 col-span-3 flex-col justify-center ">
        <div className="flex justify-between">
          <div className="text-left font-raleway font-bold text-2xl mb-5">
            Créer un module
          </div>
        </div>
        <div className="flex-col w-11/12 bg-grey-light rounded-3xl p-5">
          <div className="bg-white p-5 rounded-3xl">
            <div className="mb-20 flex items-end">
              <div className="w-full relative">
                <Input
                  label="Titre du module"
                  placeholder="Taper ici"
                  name="title"
                  value={module.title}
                  onChange={(e) => handleChange(e)}
                />
                {validTitle !== null ? (
                  !validTitle ? (
                    <div className="text-error absolute mt-2 italic text-sm font-light font-raleway">
                      Merci de renseigner un autre nom de module
                    </div>
                  ) : null
                ) : null}
              </div>
              <div className="ml-5 ">
                {validTitle !== null ? (
                  !validTitle ? (
                    <ErrorIcon width={20} />
                  ) : (
                    <SuccesIcon width={20} />
                  )
                ) : null}
              </div>
            </div>
            <Input
              label="Petite descritpion du module"
              placeholder="Taper ici"
              name="description"
              id="descritption"
              value={module.description}
              onChange={(e) => handleChange(e)}
            />

            <label className="block border-b-2 my-20 border-grey-dark text-left">
              <p className=" font-raleway text-base text-grey-dark font-medium">
                Type de module
              </p>
              <select
                value={module.type}
                onChange={(e) => {
                  setModule({ ...module, type: e.target.value });
                }}
                className="focus:outline-none form-select block w-full text-grey-darker mt-2 mb-2"
              >
                <option selected disabled>
                  Choisir un type
                </option>
                <option value="design">Module design</option>
                <option value="dev">Cours de developpement</option>
              </select>
            </label>
          </div>
        </div>
        <div className="flex mt-20 w-5/6 justify-center">
          <Button
            action={handleSubmit}
            type="primary"
            text="Créer le module"
          />
        </div>
      </div>
      <div className="col-span-2 p-5">
        <div className="text-left font-raleway font-bold text-2xl mb-5 ">
          Progression de la création du module
        </div>
        <div className="flex-col bg-grey-light rounded-3xl p-5">
          <div className="bg-white p-5 rounded-3xl flex justify-center items-center">
            <div className="w-2/4">
              <CircularProgressbar
                value={progress}
                text={`${progress}%`}
                styles={buildStyles({
                  pathTransitionDuration: 0.5,

                  // Colors
                  pathColor: "#F98F13",
                  textColor: "#F98F13",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewModule;
