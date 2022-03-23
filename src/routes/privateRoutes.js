import Unauthorized from "pages/Shared/Unauthorized";
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "utils/isLogin";
import hasRoles from "utils/hasRoles";
import { LeftArrowIcon } from "assets/icons";
import { useHistory } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  goBack,
  roles,
  path,
  ...rest
}) => {
  roles = roles || [];
  const history = useHistory();

  return (
    <Route
      {...rest}
      render={(props) =>
        hasRoles(roles) ? (
          <>
            {goBack && <div onClick={() => history.goBack()} className="cursor-pointer mb-10">
              <LeftArrowIcon fontWeight={800} />
              </div>}
            <Component {...props} />
          </>
        ) : isLogin() ? (
          <Redirect to="/app/home" />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
