import React, { useEffect } from "react";
import { connect } from "react-redux";

import routes from "routes";
import { getUserData } from "store/actions";

import Main from "./Main";
import Loader from "components/ui/Loader";
import Nav from "./Nav";

const DashboardLayout = ({ getUserData, auth }) => {
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    await getUserData();
  };
  return (
    <div className={`flex h-screen bg-gray-50 dark:bg-gray-900`}>
      <div className="flex flex-col flex-1 w-full">
        <Nav />
        {!auth.isLoading ? <Main routes={routes} /> : <Loader />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.Auth,
});
export default connect(mapStateToProps, { getUserData })(DashboardLayout);
