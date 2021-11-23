import { setUser } from "actions/auth.actions";
import React, { useEffect } from "react";
import routes from "routes";
import api from "services/api";
import Main from "./Main";
import {connect} from 'react-redux'
import { getUserData } from "store/actions";

const DashboardLayout = ({ getUserData, user}) => {
  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    await getUserData()
  }
  return (
    <div className={`flex h-screen bg-gray-50 dark:bg-gray-900`}>
      <div className="flex flex-col flex-1 w-full">
        {/* <Nav /> */}
        <Main routes={routes} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.Auth.user
})
export default connect(mapStateToProps, { getUserData })(DashboardLayout);
