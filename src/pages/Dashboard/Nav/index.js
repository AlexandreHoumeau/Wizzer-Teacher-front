import React, { useEffect, useState } from "react";

import { Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import * as Icons from "assets/icons";
import routes from "routes/sidebar";

const Nav = ({ user }) => {
  const [navigationList, setNavigationList] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  function Icon({ icon, ...props }) {
    const Icon = Icons[icon];
    return <Icon {...props} />;
  }

  useEffect(() => {
    const array = routes.filter((item) => item.permission === user.type);
    setNavigationList(array);
  }, [user]);
  return (
    <div className="relative">
      {navigationList.length > 0 && (
        <div className="border-b border-grey bg-grey-light  ">
          <div className=" md:px-2 lg:px-16 xl:px-36">
            <div className="">
              <div className="flex justify-between items-center">
                <div class="block lg:hidden py-8 pl-4">
                  <button
                    onClick={() => setShowMenu(!showMenu)}
                    class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                  >
                    <svg
                      class="fill-current h-3 w-3"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Menu</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                  </button>
                </div>
                <div className="lg:flex hidden">
                  {navigationList.map((route) => (
                    <NavLink
                      exact
                      to={route.path}
                      className={(isActive) =>
                        "flex items-center mr-12 text-base font-semibold font-raleway py-8 transition-colors duration-300 border-b " +
                        (isActive
                          ? "text-primary  border-primary"
                          : "border-waiting-light")
                      }
                    >
                      <Icon
                        className="w-5 h-5"
                        aria-hidden="true"
                        icon={route.icon}
                      />
                      <span className=" ml-4 text-xl">{route.name}</span>
                      <Route />
                    </NavLink>
                  ))}
                </div>
                <div className="flex">
                  <img
                    className="inline-block w-12 h-12 mr-4 rounded-full"
                    src="https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
                    alt=""
                  />
                  <div className="lg:block hidden">
                    <div className="flex text-base font-raleway font-semibold">
                      <p className="mr-2">{user.firstName}</p>
                      <p>{user.lastName}</p>
                    </div>
                    {user.type === "admin" ? (
                      <p className="font-light text-yellow">Master</p>
                    ) : (
                      <p className="text-purple">BootCamper</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showMenu && (
        <div className="m-4 p-4 shadow-md rounded-md absolute -bottom-60 bg-white w-full">
          {navigationList.map((route) => (
            <NavLink
              exact
              to={route.path}
              onClick={() => setShowMenu(false)}
              className={(isActive) =>
                "flex items-center mr-12 text-base font-semibold font-raleway transition-colors duration-300 p-2 " +
                (isActive
                  ? "text-primary"
                  : "border-waiting-light")
              }
            >
              <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
              <span className=" ml-4 text-xl">{route.name}</span>
              <Route />
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.Auth.user,
});

export default connect(mapStateToProps)(Nav);
