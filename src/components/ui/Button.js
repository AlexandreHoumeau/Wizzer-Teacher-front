import classNames from "classnames";
import React from "react";

const Button = ({ text, type, action, disabled, className }) => {
  return (
    <button
      type="submit"
      onClick={action}
      className={classNames(
        disabled ? `bg-${type}-disabled` : `bg-${type}`,
        'py-3 px-7 rounded-4xl',
        className
        )}
      // className={`bg-${type} py-4 px-8 rounded-4xl`}
    >
      <p className="text-lg font-raleway font-bold text-white">
        {text}
      </p>
    </button>
  );
};

export default Button;
