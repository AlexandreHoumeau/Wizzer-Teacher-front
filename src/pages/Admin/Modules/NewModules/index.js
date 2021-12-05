import React from "react";
import { Table, Input, Button } from "components/ui";
import { useState } from "react";
import ProgressBar from "components/ui/ProgressBar";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const NewModule = () => {
  const dataSource = [
    // {
    //   key: "1",
    //   title: "Mike",
    //   points: 32,
    //   status: "10 Downing Street",
    // },
    // {
    //   key: "2",
    //   title: "John",
    //   points: 42,
    //   status: "10 Downing Street",
    //   battle: "10 Downing Street",
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
      <div className=" p-5 col-span-3 flex-col justify-center ">
        <div className="flex justify-between">
          <div className="text-left font-raleway font-bold text-2xl mb-5">
            Créer un module
          </div>
        </div>
        <div className="flex-col w-3/4 bg-grey-light rounded-3xl p-5">
          <div className="mb-20">
            <Input label="Titre du module" placeholder="Taper ici" />
          </div>
          <Input label="Petite descritpion du module" placeholder="Taper ici" />

          <label class="block border-b-2 my-20 border-grey-dark text-left">
            <p className=" font-raleway text-base text-grey-dark font-medium">
              Type de module
            </p>
            <select class="focus:outline-none form-select block w-full text-grey-darker mt-2 mb-2">
              <option selected disabled>Choisir le type</option>
              <option>Module design</option>
              <option>Cours de developpement</option>
            </select>
          </label>
          <Table dataSource={dataSource} columns={columns} />
          <div className="flex mt-20 justify-center">
            <Button type="primary" text="Créer le module" />
          </div>
        </div>
      </div>
      <div className="bg-grey-light rounded-3xl p-5 col-span-2">
        <CircularProgressbar value={30} text={`${30}%`} />;
      </div>
      {/* <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="flex justify-between mb-10">
            <div className="text-left font-raleway font-bold text-2xl mb-5">
              Créer un module
            </div>
          </div>
        </div>
      </div>


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
