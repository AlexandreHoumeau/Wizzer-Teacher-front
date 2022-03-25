import { BrowserRouter, Switch } from "react-router-dom";

import "./index.css";
import PublicRoute from "./routes/publicRoutes";
import PrivateRoute from "./routes/privateRoutes";

// PAGES
//import Login from "./pages/Auth/Login";
import Register from "pages/Auth/Register";
import Login from "pages/Auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardLayout from "pages/Dashboard";
import { Provider } from "react-redux";
import Store from "./store";
import Landing from "pages/Landing";
import Password from "pages/Auth/Password";

export default function App() {
  return (
    <Provider store={Store}>
      <ToastContainer />
      <BrowserRouter>
        <Switch>
          <PublicRoute
            restricted={false}
            component={Landing}
            path="/"
            exact
          />
          <PublicRoute
            restricted={false}
            component={Login}
            path="/login"
            exact
          />
          <PublicRoute
            restricted={false}
            component={Password}
            path="/password"
            exact
          />
          <PublicRoute
            restricted={false}
            component={Register}
            path="/register"
            exact
          />
          <PrivateRoute component={DashboardLayout} path="/app" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
