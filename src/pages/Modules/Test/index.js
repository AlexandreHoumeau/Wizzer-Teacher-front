import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { useParams } from "react-router-dom";
import "react-quill/dist/quill.bubble.css";

import Modal from "react-modal";

import api from "services/api";

import { Button } from "components/ui";
import { ExerciceIcon } from "assets/icons";
import Search from "./Github/search";

const Test = () => {
  const { testId } = useParams();
  const [test, setTest] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const fetchExercice = async () => {
    const data = await api.axios.get(`/v1/user/test/${testId}`);
    if (data?.test) {
      setTest(data.test);
    }
  };

  useEffect(() => {
    fetchExercice();
  }, []);

  return (
    <div className="font-raleway">
      {test._id && (
        <div>
          <div className="bg-grey-light p-8 rounded-3xl">
            <div className="text-2xl font-semibold mr-4">
              Module: {test?._module?.title}
            </div>
          </div>

          <div className="">
            <div className="mt-12 mb-8">
              <div className="text-2xl font-semibold mr-4 mb-4">Cours</div>

              <div className="bg-grey-light p-8 rounded-3xl flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-primary-light rounded-lg p-2">
                    <ExerciceIcon />
                  </div>
                  <div className="text-2xl font-semibold ml-4">
                    Fiche cours: {test?._exercice?.title}
                  </div>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline"
                  href={test?._exercice?.course}
                >
                  Voir le cours
                </a>
              </div>
            </div>

            <div className="mt-12 mb-8">
              <div className="text-2xl font-semibold mr-4 mb-4">Exercice</div>

              <div className="bg-grey-light p-8 rounded-3xl">
                <div className="text-2xl mb-4 text-primary">
                  Exercice: {test?._exercice?.title}
                </div>
                <div className="bg-white rounded-3xl shadow overflow-auto max-h-48">
                  <ReactQuill
                    value={test?._exercice?.exercice}
                    readOnly={true}
                    theme={"bubble"}
                  />
                </div>
              </div>
            </div>
            {!test.repository && (
              <div className="flex justify-center">
                <Button
                  action={() => setIsOpen(true)}
                  text="Terminé"
                  type="primary"
                />
              </div>
            )}
          </div>
        </div>
      )}
      <Modal
        ariaHideApp={false}
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Example Modal"
      >
        <Search testId={testId} />
      </Modal>
    </div>
  );
};

export default Test;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "35%",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
};
