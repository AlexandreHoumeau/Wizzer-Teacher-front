import React, { useEffect, useState } from 'react'
import api from 'services/api'
import List from './list'

const Users = () => {
  const [userList, setUserList] = useState([])

  const fetchUsers = async () => {
    try {
      const { users } = await api.axios.get('/v1/users')
      setUserList(users)  
    } catch (error) {}
  }

  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <div className="font-raleway">
      <div className='flex items-center space-x-4 font-semibold text-3xl mb-5'>
        <div className="font-semibold text-3xl">Utilisateurs inscrits</div>
        <div className="text-grey-dark">{userList.length || 0}</div>
      </div>
      <List users={userList} />
    </div>
  )
}

export default Users
