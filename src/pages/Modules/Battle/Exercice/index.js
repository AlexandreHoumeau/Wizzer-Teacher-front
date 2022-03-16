import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { useHistory, useParams } from "react-router-dom";
import "react-quill/dist/quill.bubble.css";

import Modal from "react-modal";

import api from "services/api";

import { Button, Tag, TagCourse } from "components/ui";
import { ExerciceIcon } from "assets/icons";
import Search from "./Github/search";

const BattleExercice = () => {
  const { exerciceId } = useParams();
  const history = useHistory()
  const [exercice, setExercice] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [done, setDone] = useState(false)

  const fetchExercice = async () => {
    try {
      const { exercice, isDone } = await api.axios.get(
        `/v1/user/exercice/${exerciceId}`
      );
      setDone(isDone)
      setExercice(exercice);
    } catch (error) {}
  };

  const submit = async (repository) => {
    try {
      const { test } = await api.axios.post("/v1/user/test", {
        repository,
        _exercice: exerciceId,
        battle: true,
      });

      if (test) {
        history.goBack()
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchExercice();
  }, []);

  return (
    <div className="font-raleway">
      {exercice._id && (
        <div>
          <div className="bg-grey-light p-8 rounded-3xl justify-between items-center flex">
            <div className="text-2xl font-semibold mr-4">
              Module: {exercice?._module?.title}
            </div>
            <div className="flex items-center">
              <div className="bg-primary-light mr-4 py-2 px-4 text-primary font-semibold rounded-full">
                {exercice.points} points
              </div>
              <TagCourse title={exercice.difficulty} />
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
                    Fiche cours: {exercice?.title}
                  </div>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline"
                  href={exercice?.course}
                >
                  Voir le cours
                </a>
              </div>
            </div>

            <div className="mt-12 mb-8">
              <div className="text-2xl font-semibold mr-4 mb-4">Exercice</div>

              <div className="bg-grey-light p-8 rounded-3xl">
                <div className="text-2xl mb-4 text-primary">
                  Exercice: {exercice?.title}
                </div>
                <div className="bg-white rounded-3xl shadow overflow-auto max-h-48">
                  <ReactQuill
                    value={exercice?.exercice}
                    readOnly={true}
                    theme={"bubble"}
                  />
                </div>
              </div>
            </div>
            {!exercice.repository && !done && (
              <div className="flex justify-center">
                <Button
                  action={() => setIsOpen(true)}
                  text="Terminer"
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
        <Search action={(repo) => submit(repo)} exerciceId={exerciceId} />
      </Modal>
    </div>
  );
};

export default BattleExercice;

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
