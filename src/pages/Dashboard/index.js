import React from "react";
// import Sidebar from "./Sidebar";
import routes from "routes";
import Main from "./Main";
// import Nav from "./Nav";

const DashboardLayout = ({ children, ...rest }) => {
  return (
    <div className={`flex h-screen bg-gray-50 dark:bg-gray-900`}>
      <div className="flex flex-col flex-1 w-full">
        {/* <Nav /> */}
        <Main routes={routes} />
      </div>
    </div>
  );
};

export default DashboardLayout;
