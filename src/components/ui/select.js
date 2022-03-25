import classNames from "classnames";
import React from "react";

const Select = ({ action, label, placeholder, values, value, className }) => {
  return (
    <label className={classNames("block border-b-2  border-grey-dark text-left", className)}>
      <p className=" font-raleway text-base text-grey-dark font-medium">
        {label}
      </p>
      <select
        value={value || module.type}
        defaultValue={value}
        onChange={(e) => {
          action(e.target.value);
        }}
        className="focus:outline-none bg-transparent form-select block w-full text-grey-darker mt-2 mb-2"
      >
        <option selected disabled>
          {placeholder}
        </option>
        {typeof values[0] === "object"
          ? values.map((value) => (
              <option key={value.value} value={value.value}>
                {value.title}
              </option>
            ))
          : values.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
      </select>
    </label>
  );
};

export default Select;
