// import ThemedSuspense from "components/ui/ThemedSuspense";
import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";

import Loader from "components/ui/Loader";
import PrivateRoute from "routes/privateRoutes";

const Main = ({ routes, isLoading }) => {
  return (
    <main className="h-full">
      <div className="relative px-36 py-12">
        <Suspense fallback={<Loader isLoading={isLoading}/>} />
          <Switch>
            {routes.map((route, i) => {
              return route.component ? (
                <PrivateRoute
                  key={i}
                  exact={true}
                  path={`/app${route.path}`}
                  roles={route.roles}
                  component={route.component}
                  // render={(props) => <route.component {...props} />}
                />
              ) : null;
            })}
            {/* <Redirect exact from="/app" to="/" /> */}
            {/* <Route component={Page404} /> */}
          </Switch>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.UI.isLoading
});

export default connect(mapStateToProps)(Main);
