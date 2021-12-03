import React from "react";
import { Table, Button } from "components/ui"
import { useState } from "react";

const NewModule = () => {

  const dataSource = [
    {
      key: '1',
      title: 'Mike',
      points: 32,
      status: '10 Downing Street',
    },
    // {
    //   key: '2',
    //   name: 'John',
    //   age: 42,
    //   address: '10 Downing Street',
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
    <div className="">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="flex justify-between mb-10">
            <div className="text-left font-raleway font-bold text-2xl mb-5">Ajouter un module</div>
            <div className="border-2 border-grey-dark cursor-pointer py-3 px-4 rounded-md">
              
              <div className="text-gray-400 font-bold">Ajouter un cours</div>
            </div>
          </div>
        </div>
      </div>

      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default NewModule;
