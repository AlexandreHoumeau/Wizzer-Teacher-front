import { Button } from "components/ui";
import React from "react";
import Battle from 'assets/images/battle-on.png'

const Banner = () => {
  return (
    <div className=" bg-primary-light mb-10 p-8 rounded-3xl">
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <div className="font-bold text-4xl">C’est l’heure de la battle !</div>
          <div className="text-grey-dark text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            consequat, lacus, pellentesque pellentesque quis auctor. Mauris enim
            mi sagittis odio sapien. Nec ac consectetur a mattis quam aenean
            est.
          </div>
          <div className="mt-10">
            <Button text="commencer" type="primary" />
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
