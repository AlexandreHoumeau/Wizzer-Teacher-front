import Unauthorized from "pages/Shared/Unauthorized";
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "utils/isLogin";
import hasRoles from "utils/hasRoles";

const PrivateRoute = ({ component: Component, roles, path, ...rest }) => {
  roles = roles || [];
  
  return (
    <Route
      {...rest}
      render={(props) => 
        hasRoles(roles) ? (
          <Component {...props} />
        ) : isLogin() ?  <Unauthorized /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;