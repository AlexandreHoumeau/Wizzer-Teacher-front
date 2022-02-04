import { ExerciceIcon } from "assets/icons";
import { Button, Input, Select } from "components/ui";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import { useParams } from "react-router-dom";
import api from "services/api";
import { useHistory } from "react-router";
import "react-quill/dist/quill.snow.css";

const difficulties = [
  { value: "easy", title: "Facile" },
  { value: "medium", title: "Moyen" },
  { value: "hard", title: "Difficile" },
];

const arrayPoints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link"],
    ["clean"],
  ],
};

const Edit = () => {
  let { exerciceId, id } = useParams();
  const history = useHistory()

  const [exercice, setExercice] = useState();

  const fetchCourse = async () => {
    const data = await api.axios.get(`/v1/exercices/${exerciceId}`);

    if (data?.exercice) {
      setExercice(data.exercice);   
    }
  };

  const submit = async () => {
    const data = await api.axios.put("/v1/exercices", {
      exercice,
      exerciceId
    });
    if (data?.$success) {
      history.goBack();
    }
  };

  useEffect(() => {
    fetchCourse();
  }, [exerciceId]);

  return (
    <div>
      <div className="mb-10 flex items-center justify-between">
        <div className="font-raleway font-bold text-3xl">Modifier le cours</div>
      </div>
      <div>
        <div className="text-2xl font-bold mb-4">
          Les informations sur le cours
        </div>
        <div className="bg-grey-light rounded-2xl p-8">
          <div className="grid grid-cols-8 space-x-8">
            <div className="col-span-4">
              <Input
                value={exercice?.title}
                onChange={(e) => setExercice({...exercice, title: e.target.value})}
                label="Titre du cours"
                placeholder="Titre"
              />
            </div>
            <div className="col-span-2">
              <Select
                action={(value) => setExercice({...exercice, points: value})}
                value={exercice?.points}
                label="Points de l'exercice"
                values={arrayPoints}
                placeholder="Points"
              />
            </div>
            <div className="col-span-2">
              <Select
                action={(value) => setExercice({...exercice, difficulty: value})}
                value={exercice?.difficulty}
                label="Difficulté"
                values={difficulties}
                placeholder="Type de difficulté"
              />
            </div>
          </div>
        </div>

        <div className="text-2xl font-bold mt-8 mb-4">Le cours</div>
        <div className="bg-grey-light rounded-2xl p-8">
          <div className="grid grid-cols-12 space-x-8">
            <div className=" flex justify-center col-span-1 ">
              <div className="bg-primary-light  rounded-lg p-2">
                <ExerciceIcon />
              </div>
            </div>
            <div className="col-span-11">
              <Input
                value={exercice?.course}
                onChange={(e) => setExercice({...exercice, course: e.target.value})}
                label="Lien du cours"
                placeholder="Lien"
              />
            </div>
          </div>
        </div>

        <div className="text-2xl mt-8 font-bold mb-4">L'exercice</div>
        <div className="bg-grey-light rounded-2xl p-8">
          <ReactQuill
            value={exercice?.exercice || ''}
            modules={modules}
            className="bg-white rounded-2xl"
            onChange={(value) => setExercice({...exercice, exercice: value})}
          />
        </div>

        <div className="flex justify-center mt-10">
          <Button
            action={submit}
            text="Modifier le cours"
            type="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Edit;
