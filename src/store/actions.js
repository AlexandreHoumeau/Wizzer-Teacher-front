import { JWT_TOKEN } from '../config'
import Api from 'services/api'
import { useHistory } from 'react-router'

export const loginUser = (userData, from = null) => async (dispatch) => {
  try {
    // Loading status
    dispatch({ type: 'LOADING_USER' })

    // Login to get jwtToken
    await Api.axios.post('v4/auth/login', { ...userData, type: 'admin' })

    // Fetch user data
    dispatch(getUserData(from))
  } catch (error) {
    dispatch({
      type: 'SET_UNAUTHENTICATED',
      payload: from
    })
  }
}

export const getUserData = (from = null) => async (dispatch) => {
  try {    
    dispatch({ type: 'LOADING_USER' })

    const { person } = await Api.axios.get('v1/me')
    dispatch({
      type: 'SET_USER',
      payload: person
    })

    // TODO ?? a supprimer à vérifier ?
    dispatch({
      type: 'SET_AUTHENTICATED',
      payload: from
    })

  } catch (err) {
    console.log(err)
  }
}

export const logoutUser = (from = null) => async (dispatch) => {
  try {
    localStorage.removeItem(JWT_TOKEN)
    localStorage.removeItem('previousPath') // temporary clean-up for unused var, should be removed later
    
    await Api.axios.post('v4/auth/logout')
    
    delete Api.axios.defaults.headers.common['Authorization']

    dispatch({
      type: 'SET_UNAUTHENTICATED',
      payload: from
    })

  } catch (err) {
    console.log(err)
  }
}

export const resetRedirect = () => async (dispatch) => {
  try {
    dispatch({ type: 'RESET_REDIRECT' })

  } catch (err) {
    console.log(err)
  }
}

