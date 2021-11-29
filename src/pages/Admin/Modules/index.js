import React from "react";
import { Button } from "components/ui";
import { LeftArrowIcon, RightArrowIcon } from "assets/icons";
import CardCourse from "components/ui/CardCourse";
import { useHistory } from "react-router";
const Modules = () => {
  const history = useHistory()

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <div className="font-raleway font-bold text-3xl">
          Cours de webdesign
        </div>
        <div className="flex items-center">
          <LeftArrowIcon />
          <RightArrowIcon className="mr-12" />
          <Button action={() => history.push('/app/admin/modules/new')} text="Ajouter un module" type="primary" />
        </div>
      </div>
      <div className="flex w-full overflow-y-auto mt-10 pb-4">
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
      </div>

      <div className="flex justify-between items-center mt-14">
        <div className="font-raleway font-bold text-3xl">
          Cours de Développement
        </div>
        <div className="flex items-center">
          <LeftArrowIcon />
          <RightArrowIcon className="mr-12" />
          <Button text="Ajouter un module" type="primary" />
        </div>
      </div>
      <div className="flex w-full overflow-y-auto mt-10 pb-4">
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
      </div>
    </div>
  );
};

export default Modules;
