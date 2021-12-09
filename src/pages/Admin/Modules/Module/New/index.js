import { Input } from "components/ui";
import React from "react";

const NewCourse = () => {
  return (
    <div>
      <div className="mb-10 flex items-center justify-between">
        <div className="font-raleway font-bold text-3xl">Créer un cours</div>
      </div>

      <div>
        <div>Partie cours</div>
        <Input label="Titre du cours" placeholder="Titre" />
        <Input label="Url du google doc" placeholder="url" />
      </div>
    </div>
  );
};

export default NewCourse;
