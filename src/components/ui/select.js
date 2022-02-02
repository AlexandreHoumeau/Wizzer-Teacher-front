import React from "react";

const Select = ({ action, label, placeholder, values}) => {

  return (
    <label className="block border-b-2  border-grey-dark text-left">
      <p className=" font-raleway text-base text-grey-dark font-medium">
        {label}
      </p>
      <select
        value={module.type}
        onChange={(e) => {
          action(e.target.value);
        }}
        className="focus:outline-none bg-transparent form-select block w-full text-grey-darker mt-2 mb-2"
      >
        <option selected disabled>
          {placeholder}
        </option>
        {values.map((value) => (
          <option key={value.value} value={value.value}>{value.title}</option>
        ))}
      </select>
    </label>
  );
};

export default Select;
