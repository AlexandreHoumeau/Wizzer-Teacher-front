import React, { useState, useEffect } from "react";
import { Button } from "components/ui";
import Battle from "assets/images/battle-on.png";

const Banner = ({ todayExercices }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [banner, setBanner] = useState({
    title: "Aucune battle disponible",
    button: "Voir l’historique des battle",
    bg: "primary",
    bgBtn: "black",
  });

  useEffect(() => {
    console.log(todayExercices)
    if (todayExercices?._exercices?.length > 0) {
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
              <Button text={banner.button} type={banner.bgBtn} />
              {todayExercices?._exercices?.length > 0 && (
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
            {isOpen && (
              <div className="mt-10">
                {todayExercices?._exercices?.map((exercice) => (
                  <div key={exercice._id}>
                    <p>Hello World</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div>
          <img className="ml-auto mr-20 w-72" alt="battle" src={Battle} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
