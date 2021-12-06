import React, { useState } from "react";
import { Input, Button } from "components/ui";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ErrorIcon, SuccesIcon } from "assets/icons";

const modules = [
  {
    title: "js",
  },
  { title: "php" },
];

const step = ["title", "description", "type"];
const NewModule = () => {
  const [progress, setProgress] = useState(0);
  const [validTitle, setValidTitle] = useState(null);
  const [module, setModule] = useState({
    title: "",
    description: "",
    type: "",
  });
  const verification = () => {
    if (modules.find((el) => el.title === module.title)) {
      setValidTitle(false);
    } else {
      setValidTitle(true);
    }
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
              <div className="w-full">
                <Input
                  label="Titre du module"
                  placeholder="Taper ici"
                  value={module.title}
                  onChange={(e) =>
                    setModule({ ...module, title: e.target.value })
                  }
                  onBlur={verification}
                />
              </div>
              <div className="w-20">
                {validTitle !== null && validTitle === false ? (
                  <ErrorIcon />
                ) : (
                  <SuccesIcon />
                )}
              </div>
            </div>
            <Input
              label="Petite descritpion du module"
              placeholder="Taper ici"
            />

            <label className="block border-b-2 my-20 border-grey-dark text-left">
              <p className=" font-raleway text-base text-grey-dark font-medium">
                Type de module
              </p>
              <select
                defaultValue="Choisir un type"
                className="focus:outline-none form-select block w-full text-grey-darker mt-2 mb-2"
              >
                <option>Module design</option>
                <option>Cours de developpement</option>
              </select>
            </label>
          </div>
        </div>
        <div className="flex mt-20 w-5/6 justify-center">
          <div className="mr-5">
            <Button type="grey-darker" text="Enregitsrer le brouillon" />
          </div>
          <Button type="primary" text="Créer le module" />
        </div>
      </div>
      <div className="col-span-2 p-5">
        <div className="text-left font-raleway font-bold text-2xl mb-5 ">
          Progression de la création du module
        </div>
        <div className="bg-grey-light rounded-3xl p-10 flex justify-center items-center">
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
  );
};

export default NewModule;
