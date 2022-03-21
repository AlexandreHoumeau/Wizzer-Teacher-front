import Battle from "assets/images/battle-on.png";
import { Button } from "components/ui";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Banner = ({ todayExercices }) => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [banner, setBanner] = useState({
    title: "Aucune battle disponible",
    button: "Voir l’historique des battle",
    bg: "primary",
    bgBtn: "black",
  });

  useEffect(() => {
    console.log(todayExercices);
    if (todayExercices?.length > 0) {
      setBanner({
        title: "C’est l’heure de la battle !",
        button: "Commencer",
        bg: "primary",
        bgBtn: "primary",
      });
    }
  }, [todayExercices]);

  return (
    <div className="bg-primary-light mb-10 p-8 rounded-3xl">
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <div className="font-bold text-4xl">{banner.title}</div>
          <div className="text-grey-dark text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            consequat, lacus, pellentesque pellentesque quis auctor. Mauris enim
            mi sagittis odio sapien. Nec ac consectetur a mattis quam aenean
            est.
          </div>
          <div>
            <div className="mt-10 flex items-center">
              <Button
                action={() => history.push("/app/modules/battle")}
                text={banner.button}
                type={banner.bgBtn}
              />
              {todayExercices?.length > 0 && (
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className=" ml-6 cursor-pointer text-primary font-semibold"
                >
                  {isOpen
                    ? "Masquer les cours de la battle"
                    : "Afficher les cours de la battle"}
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <img className="ml-auto mr-20 w-72" alt="battle" src={Battle} />
        </div>
      </div>
      {isOpen && (
        <div className="mt-10 flex overflow-x-scroll min-w-full pb-3">
          {todayExercices?.map((exercice) => (
            <div
              onClick={() => history.push("/app/modules/battle")}
              key={exercice._id}
              className="bg-white cursor-pointer hover:border-2 border-primary rounded-3xl flex-shrink-0 w-72 px-8 py-6 mr-6"
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
      )}
    </div>
  );
};

export default Banner;
