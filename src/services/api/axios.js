import axios from "axios";

import { API_DOMAIN, JWT_TOKEN, I18N_LANGUAGE } from "config";
import { toast } from "react-toastify";
import store from '../../store'

const apiAxios = axios.create();
const authorization = localStorage.getItem(JWT_TOKEN);
const locale = localStorage.getItem(I18N_LANGUAGE);

apiAxios.defaults.baseURL = API_DOMAIN;
apiAxios.defaults.headers.common["Authorization"] = `Bearer: ${authorization}`;
apiAxios.defaults.headers.common["Accept-Language"] = locale;

apiAxios.interceptors.request.use((config) => {
  const { dispatch } = store

  dispatch({ type: 'LOADING_UI' })

  return config;
});

apiAxios.interceptors.request.use(function (config) {
  if (config.params) {
    for (const key of Object.keys(config.params)) {
      config.params[key] = JSON.stringify(config.params[key]);
    }
  }
  return config;
});

apiAxios.interceptors.response.use(
  function ({ data, config }) {
    const { dispatch } = store
    dispatch({ type: 'CLEAR_ERRORS' })

    dispatch({
      type: 'SET_AUTH_ERROR',
      payload: null
    })

    const { $token, $redirect, $message, $notification } = data;

    if ($token) {
      localStorage.setItem(JWT_TOKEN, $token);
      apiAxios.defaults.headers.common["Authorization"] = `Bearer: ${$token}`;
    }

    if ($redirect) {
      // const { dispatch } = store
      // dispatch({
      //   type: 'SET_REDIRECT',
      //   payload: $redirect
      // })
      // dispatch({ type: 'RESET_REDIRECT' })
    }

    if ($message) {
      console.log($message);
    }

    return data;
  },
  function (error) {
    // const { dispatch } = store

    // dispatch({
    //   type: 'SET_AUTH_ERROR',
    //   payload: error
    // })

    if (error.response?.data?.$message) {
      toast.error(error.response?.data?.$message); 
    }
  }
);

// loadProgressBar(null, apiAxios)

export default apiAxios;
