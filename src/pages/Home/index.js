import { Button, TagCourse } from "components/ui";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-2 space-x-8 font-raleway">
        <div className="">
          <div className="mb-10">
            <div className="text-3xl font-bold mb-8">Vos Modules</div>
            <div className="bg-grey-light p-8 space-x-10 rounded-xl grid grid-cols-2">
              <div className="bg-white p-8 rounded-xl">
                <div className="text-center text-grey-dark text-xl">
                  Modules Validés
                </div>
                <div className="text-primary text-5xl font-bold text-center mt-4">
                  16
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl">
                <div className="text-center text-grey-dark text-xl">
                  Modules démarés
                </div>
                <div className="text-primary text-5xl font-bold text-center mt-4">
                  7
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-8">Détail des modules</div>
            <div className="bg-grey-light p-8 space-x-10 rounded-xl grid grid-cols-2">
              <div className="bg-white p-8 rounded-xl">
                <div className="text-center text-grey-dark text-xl">
                  Modules Validés
                </div>
                <div className="text-primary text-5xl font-bold text-center mt-4">
                  16
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl">
                <div className="text-center text-grey-dark text-xl">
                  Modules démarés
                </div>
                <div className="text-primary text-5xl font-bold text-center mt-4">
                  7
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div className="text-3xl font-bold mb-8">Vos Cours</div>
            <div className="bg-grey-light p-8 space-x-10 rounded-xl grid grid-cols-2">
              <div className="bg-white p-8 rounded-xl">
                <div className="flex">
                  <TagCourse title="Normal" type="waiting" />
                </div>
                <div className="text-2xl my-6">Les Fonctions</div>
                <div className="flex justify-center">
                  <Button type="primary" text="Reprendre" />
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl">
                <div className="flex">
                  <TagCourse title="Normal" type="waiting" />
                </div>
                <div className="text-2xl my-6">Les Fonctions</div>
                <div className="flex justify-center">
                  <Button type="primary" text="Reprendre" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
