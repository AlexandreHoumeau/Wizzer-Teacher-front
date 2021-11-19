export const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: {},
  redirect: null,
  forceRedirect: false,
  error: null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTHENTICATED':
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        redirect: action.payload
      }

    case 'SET_UNAUTHENTICATED':
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        redirect: action.payload
      }

    case 'SET_USER':
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      }

    case 'LOADING_USER':
      return {
        ...state,
        isLoading: true
      }

    case 'SET_REDIRECT':
      return {
        ...state,
        forceRedirect: true,
        redirect: action.payload
      }

    case 'RESET_REDIRECT':
      return {
        ...state,
        forceRedirect: false,
        redirect: null
      }

      case 'SET_AUTH_ERROR':
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}