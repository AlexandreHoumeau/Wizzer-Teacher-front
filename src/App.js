import { BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import PublicRoute from "./routes/publicRoutes";
//import PrivateRoute from "./routes/privateRoutes";

// PAGES
//import Login from "./pages/Auth/Login";
import Store from "store";
import Register from "pages/Auth/Register";
import { ToastContainer } from "react-toastify";
//import DashboardLayout from "pages/Dashboard";

export default function App() {
  return (
      <Provider store={Store}>
        <ToastContainer />
        <BrowserRouter>
          <Switch>
{/*            <PublicRoute restricted={false} component={Home} path="/" exact />
            <PublicRoute
                restricted={false}
                component={Login}
                path="/login"
                exact
            />*/}
            <PublicRoute
                restricted={false}
                component={Register}
                path="/register"
                exact
            />
{/*            <PublicRoute
                restricted={false}
                component={Landing}
                path="/landing"
                exact
            />
            <PrivateRoute component={DashboardLayout} path="/app" />*/}
          </Switch>
        </BrowserRouter>
      </Provider>
  );
};

/*const Home = () => (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-gray-500">You have a new message!</p>
      </div>
    </div>
);*/