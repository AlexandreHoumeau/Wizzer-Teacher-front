import { format } from "date-fns";
import React from "react";
import { useHistory } from "react-router-dom";

const List = ({ users }) => {
  const history = useHistory()

  return (
    <div className="grid grid-cols-4 space-x-8">
      {users.map((user) => (
        <div
          className="bg-grey-light cursor-pointer rounded-3xl text-center p-10 flex justify-center"
          key={user._id}
          onClick={() => history.push(`/app/admin/user/${user._id}`)}
        >
          <div className="space-y-4">
            <img
              className="inline-block w-20 h-20 rounded-full"
              src="https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
              alt=""
            />
            <div className="text-xl font-semibold">
              {user.firstName} {user.lastName}
            </div>
            <div className="flex">
              <div className="text-primary bg-primary-light p-2 rounded-full">
                Dernière connexion {format(new Date(user.lastLogin), "dd/MM")}
              </div>
            </div>
            <div>{user.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
