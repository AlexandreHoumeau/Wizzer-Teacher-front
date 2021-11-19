import axios from 'axios'
import jwtDecode from 'jwt-decode'

import { JWT_TOKEN } from '@config'
import { logoutUser, getUserData } from './actions'

import Store from './index'

export const CheckAuthentication = (from = null) => {
  // get admin JWT
  const adminToken = localStorage.getItem(JWT_TOKEN)

  if (adminToken) {
    // decode token
    const decodedToken = jwtDecode(adminToken)

    // check validity
    if (decodedToken.exp * 1000 < Date.now()) {
      Store.dispatch(logoutUser(from))
    } else {
      // Init session
      axios.defaults.headers.common['Authorization'] = `Bearer: ${adminToken}`
      Store.dispatch(getUserData(from))
    }
  } else {
    Store.dispatch({ type: 'SET_UNAUTHENTICATED', payload: from })
  }
}