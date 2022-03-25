import React, { useEffect, useState } from 'react'
import api from 'services/api'
import List from './list'
import classNames from 'classnames'

const Users = () => {
  const [userList, setUserList] = useState([])
  const [keyword, setKeyword] = useState('')

  const fetchUsers = async () => {
    try {
      const { users } = await api.axios.get('/v1/users')
      setUserList(users)  
    } catch (error) {}
  }

  const search = async (e) => {
    try {
      e.preventDefault()
      const { users } = await api.axios.post(`/v1/users/${keyword}`)
      setUserList(users)
    } catch (error) {}
  }

  useEffect(() => {
    if (!keyword) {
      fetchUsers()
    }
  }, [keyword])

  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <div className="font-raleway">
      <div className='flex items-center space-x-4 font-semibold text-3xl mb-5'>
        <div className="font-semibold text-3xl">Utilisateurs inscrits</div>
        <div className="text-grey-dark">{userList.length || 0}</div>
      </div>
      <form onSubmit={search} className="bg-grey-light ml-4 xl:w-1/3 p-5 space-x-4 rounded-xl my-5 flex items-center">
        <input onChange={(e) => setKeyword(e.target.value)} placeholder="Chercher un étudiant" className='p-2 w-full' />
        <button className="bg-primary text-white py-2 px-4 rounded">Rechercher</button>
      </form>
      {userList.length > 0 ? (
        <List users={userList} />
      ): (
        <div>Aucun utilisateur trouvé</div>
      )}
    </div>
  )
}

export default Users
