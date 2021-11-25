import Store from '../store/index'

const hasRoles = ({ roles }) => {
  const { Auth } = Store.getState();
  
  setTimeout(() => {
    console.log(Auth.user)  
  }, 3000)
  if (!roles?.length) {
    return true
  }
  // if (roles.inclues())
}

export default hasRoles
