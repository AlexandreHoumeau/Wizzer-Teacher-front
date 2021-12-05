import React from "react";
import { Table, Input } from "components/ui";
import { useState } from "react";

const NewModule = () => {
  const dataSource = [
    // {
    //   key: '1',
    //   title: 'Mike',
    //   points: 32,
    //   status: '10 Downing Street',
    // },
    // {
    //   key: '2',
    //   title: 'John',
    //   points: 42,
    //   status: '10 Downing Street',
    //   battle: '10 Downing Street',
    // },
  ];

  const columns = [
    {
      title: "Titre du cours",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Points",
      dataIndex: "points",
      key: "points",
    },
    {
      title: "Statut",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Battle",
      dataIndex: "battle",
      key: "battle",
    },
  ];

  return (
    <div className="lg:grid grid-cols-5 gap-4">
      <div className="bg-blue-200 p-5 col-span-3">
        <div className="flex justify-between mb-10">
          <div className="text-left font-raleway font-bold text-2xl mb-5">
            Créer un module
          </div>
        </div>
      </div>
      <div className=" bg-gray-100 rounded p-5 col-span-2"></div>
      {/* <div className="bg-green-200"></div> */}
      {/* <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="flex justify-between mb-10">
            <div className="text-left font-raleway font-bold text-2xl mb-5">
              Créer un module
            </div>
          </div>
        </div>
      </div>

      <div className="w-2/3 mb-10">
        <Input label="Titre du module" placeholder="Taper ici" />
        <Input label="Petite descritpion du module" placeholder="Taper ici" />
      </div> */}

      {/* <div className="flex justify-end mb-5">
        <div className="border-2 border-grey-dark cursor-pointer py-3 px-4 rounded-md">
          <div className="text-gray-400 font-bold">+ Ajouter un cours</div>
        </div>
      </div>
      <Table dataSource={dataSource} columns={columns} /> */}
    </div>
  );
};

export default NewModule;
