import React from "react";
import { Input, Button } from "components/ui";

import { Switch } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { useState } from "react";

const NewModule = () => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium font-raleway leading-6 text-gray-900">
                Informations du module
              </h3>
              <p className="mt-1 font-raleway text-sm text-gray-600">
                Merci de renseigner les informations basiques du module.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <Input label="Titre du module" placeholder="Taper ici" />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <Input label="Description du module" placeholder="Taper ici" />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Les cours du module
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Ici vous pouvez commencer à renseigner les cours et exercices
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div>Hello World</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewModule;
