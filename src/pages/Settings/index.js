import React, { useState } from "react";
import { GithubIcon } from "assets/icons";
import api from "services/api";
import { Input } from "components/ui";


const Settings = () => {
  const [username, setUsername] = useState();
  const [repo, setRepo] = useState([]);
  const [error, setError] = useState(false);

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
    <div>
      <div>
        <h2 className="text-grey-darker text-left text-3xl">
          Information
        </h2>
        <div className="flex justify-between my-10 w-1/2">
          <div>
            <div className="my-1">Prénom</div>
            <div className="border border-grey my-2 p-5 py-2 rounded-md text-left w-72">Léo</div>
          </div>
          <div>
            <div className="my-2">Nom</div>
            <div className="border border-grey my-2 p-5 py-2 rounded-md text-left w-72">Sugiyama</div>
          </div>
        </div>
        <div>
          <div className="my-1">Mot de passe actuel</div>
          <div className="border border-grey my-2 p-5 py-2 rounded-md text-left w-72">@gmail.com</div>
        </div>
        <div className="flex justify-between my-10 w-1/2">
          <div>
            <div className="my-1">Nouveau mot de passe</div>
            <Input className="border border-grey my-2 p-5 py-2 rounded-md text-left w-72">Léo</Input>
          </div>
          <div>
            <div className="my-2">Nom</div>
            <Input className="border border-grey my-2 p-5 py-2 rounded-md text-left w-72">Sugiyama</Input>
          </div>
        </div>
      </div>

      <h2 className="text-grey-darker text-left text-3xl mt-10">
          Lien
      </h2>
      <div className="flex w-1/2 mt-5 space-x-2 items-center border pl-2 border-grey rounded">
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
    </div>
    
  );
};

export default Settings;
