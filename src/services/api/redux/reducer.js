import types from './types'

export default function reduce(state = {}, action) {
  switch (action.type) {
    case types.GET_ALL.loading:
    case types.GET.loading:
      return {
        ...state,
        [action.key]: {
          loading: true
        }
      }
    case types.GET_ALL.success: {
      const { data, ...pagination } = action.payload.data
      return {
        ...state,
        [action.key]: {
          loading: false,
          data,
          pagination
        }
      }
    }
    case types.GET.success: {
      const { data } = action.payload.data
      return {
        ...state,
        [action.key]: {
          loading: false,
          data
        }
      }
    }
    case types.GET_ALL.error:
    case types.GET.error:
      return {
        ...state,
        [action.key]: {
          loading: false,
          error: action.payload.error
        }
      }
    default:
      return state
  }
}
