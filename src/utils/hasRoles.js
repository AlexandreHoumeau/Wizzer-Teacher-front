import Store from '../store/index'

const hasRoles = (roles) => {
  console.log('HELLO WORLD')
  const { Auth } = Store.getState();
  
  if (!roles?.length) {
    return true
  }
  if (roles.includes(Auth.user.type)) {
    return true
  }
  return false
}

export default hasRoles
