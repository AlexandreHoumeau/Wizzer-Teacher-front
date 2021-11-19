import reducer from './reducer'
import actions from './actions'

import Store from '../../../store/index'

const getAll = (key, params) => {
  const store = Store
  const defaultPagination = {
    itemsPerPage: 25,
    currentIndex: 1
  }
  store.dispatch(actions.getAll(key, {
    ...defaultPagination,
    ...params,
  }))
}

const get = (key, params) => {
  const store = Store
  store.dispatch(actions.get(key, params))
}

const mapDispatchToProps = {
  getAll: dispatch => ({
    getAll: (key, request) => dispatch(getAll(key, request))
  }),
  get: dispatch => ({
    get: (key, request) => dispatch(get(key, request))
  })
}

export default {
  reducer,
  getAll,
  get,
  mdtp: mapDispatchToProps
}
