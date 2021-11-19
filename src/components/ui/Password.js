import React from "react";
import * as Icons from "assets/icons";
import { useState } from "react";

const Password = ({ placeholder, error, value, label, icon, id, name }) => {
  const [passwordVisibility, setPasswordVisibility] = useState('password')
  function Icon({ icon, ...props }) {
    const Icon = Icons[icon];
    return <Icon {...props} />;
  }

  return (
    <>
      <div className="border-b-2 border-grey-dark">
        <p className=" font-raleway text-base text-grey-dark font-medium">
          {label}
        </p>
        <div className="flex my-2 mb-2 items-center">
          <Icon className="w-6 h-6 mr-2" aria-hidden="true" icon={icon} />
          <div className="flex justify-between w-full">
            <input
              id={id}
              name={name}
              value={value}
              type={passwordVisibility}
              security
              className="focus:outline-none font-raleway font-medium placeholder-grey-darker"
              placeholder={placeholder}
            />
            <Icons.EyeIcon onClick={() => {setPasswordVisibility(passwordVisibility === 'password' ? 'text' : 'password')}}/>
          </div>
        </div>
      </div>
      {error && (
        <div>
          <p className="text-error font-raleway mt-2">{error}</p>
        </div>
      )}
    </>
  );
};

export default Password;
