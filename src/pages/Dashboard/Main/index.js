// import ThemedSuspense from "components/ui/ThemedSuspense";
import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "components/ui/Loader";

const Main = ({ routes, isLoading }) => {
  return (
    <main className="h-full bg-purple-50 overflow-y-auto">
      <div className="relative grid">
        <Suspense fallback={<Loader isLoading={isLoading}/>} />
          <Switch>
            {routes.map((route, i) => {
              return route.component ? (
                <Route
                  key={i}
                  exact={true}
                  path={`/app${route.path}`}
                  render={(props) => <route.component {...props} />}
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
