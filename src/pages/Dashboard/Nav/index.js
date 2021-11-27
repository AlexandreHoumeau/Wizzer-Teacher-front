import React from "react";
import routes from "routes/sidebar";
import { Route, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
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
      <ul className="mt-6">
          {routes.map((route) => (
            <li className="relative px-6 py-3" key={route.name}>
              <NavLink
                exact
                to={route.path}
                className="inline-flex font-gibson text-gray-600 items-center w-full text-sm font-semibold transition-colors duration-300"
                activeClassName="text-primary-500"
              >
                <Route path={route.path} exact={route.exact}>
                  <span
                    className="absolute transition-all duration-300 inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                </Route>
                {/* <Icon
                  className="w-5 h-5"
                  aria-hidden="true"
                  icon={route.icon}
                /> */}
                <Route />
                <span className="ml-4 text-xl">{route.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
    </nav>
  );
};

export default Nav;
