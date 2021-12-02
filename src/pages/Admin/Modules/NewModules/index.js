import React from "react";
import { Input, Button } from "components/ui";

import { Switch } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { useState } from "react";

const NewModule = () => {
  const [checked, setChecked] = useState(false);
  const [people, setPeople] = useState([]);
  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex flex-col text-left">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

          </div>
        </div>
      </div>
    </div>
  );
};

export default NewModule;
