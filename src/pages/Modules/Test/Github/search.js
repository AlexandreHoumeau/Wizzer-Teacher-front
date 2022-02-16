import { GithubIcon } from "assets/icons";
import classNames from "classnames";
import { Button } from "components/ui";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "services/api";

const Search = ({ testId }) => {
  const [username, setUsername] = useState();
  const [repo, setRepo] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState();
  const [error, setError] = useState(false);
  const history = useHistory()
  const { moduleId } = useParams()
  const submitRepo = async () => {
    const data = await api.axios.put(`/v1/user/test/${testId}`, {
      repository: selectedRepo,
    });
    
    if (data.success) {
      history.push(`/app/modules/${moduleId}`)
    }
  };

  const handleSubmit = async () => {
    const data = await api.axios.get(
      `https://api.github.com/users/${username}/repos`,
      {
        params: {
          per_page: 100,
          sort: "created",
        },
      }
    );

    if (data) {
      setRepo(data);
      setError(false);
    } else {
      setRepo([]);
      setError(true);
    }
  };
  return (
    <div className="font-raleway">
      <div className="text-xl">
        Pour valider l'exercice merci de renseigner votre répository
      </div>
      <div className="text-grey-dark">
        Vous pouvez soit renseigner votre username ou bien connecter wizzer
        teacher avec github dans la section{" "}
        <span className="text-primary font-semibold">profile</span>. Attention,
        vous ne pouvez pas acceder a des répos privés
      </div>

      <div className="flex mt-2 space-x-2 items-center border pl-2 border-grey rounded">
        <GithubIcon width={60} />
        <div className="h-14 mx-2 w-px bg-grey-dark" />
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nom de ton username github"
          className="h-full w-full m-4 focus:outline-none"
        />
        <button
          onClick={handleSubmit}
          className="bg-primary text-white p-4 rounded-r font-semibold h-full"
        >
          Valider
        </button>
      </div>

      {repo?.length > 0 && (
        <div className="max-h-56 border overflow-auto">
          {repo.map((r) => (
            <div
              onClick={() => setSelectedRepo(r.clone_url)}
              key={r.id}
              className="py-4 pl-2 cursor-pointer border-b-2"
            >
              <div
                className={classNames(
                  "flex items-center space-x-2",
                  selectedRepo === r.clone_url && "text-primary"
                )}
              >
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs border rounded-full px-2 py-1 text-grey-dark">
                  {r.visibility}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {error && (
        <div className="text-red mt-1 italic text-xs">
          Aucun utilisateur trouvé avec cet identifiant
        </div>
      )}
      <div className="flex justify-center mt-5">
        <Button
          action={submitRepo}
          disabled={!selectedRepo}
          type="primary"
          text="Soumettre le repo"
        />
      </div>
    </div>
  );
};

export default Search;
