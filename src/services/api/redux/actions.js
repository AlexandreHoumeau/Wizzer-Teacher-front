import axios from 'axios'

import { API_DOMAIN, JWT_TOKEN } from 'config'
import types from './types'

const actions = {
  loading: (method, key) => ({ key, type: types[method].loading, payload: {} }),
  success: (method, key, data) => ({ key, type: types[method].success, payload: { data } }),
  error: (method, key, err) => ({ key, type: types[method].error, payload: { error: err } }),
}

const getAll = (key, { $url, ...params }) => dispatch => {
  dispatch(actions.loading('GET_ALL', key))
  const token = localStorage.getItem(JWT_TOKEN)
  const data = {
    headers: { authorization: token },
    params
  }
  return axios.get(`${API_DOMAIN}${$url}`, data)
    .then(response => {
      dispatch(actions.success('GET_ALL', key, response.data))
    })
    .catch(error => {
      dispatch(actions.error('GET_ALL', key, error))
      throw (error)
    })
}

const get = (key, { $url, $_id, ...params }) => dispatch => {
  dispatch(actions.loading('GET', key))
  const token = localStorage.getItem(JWT_TOKEN)
  const data = {
    headers: { authorization: token },
    params
  }
  return axios.get(`${API_DOMAIN}${$url}/${$_id}`, data)
    .then(response => {
      dispatch(actions.success('GET', key, response.data))
    })
    .catch(error => {
      dispatch(actions.error('GET', key, error))
      throw (error)
    })
}

export default {
  getAll,
  get
}

