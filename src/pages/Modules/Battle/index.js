import React, { useEffect, useState } from 'react'
import api from 'services/api'

const Battle = () => {
  const [todayExercices, setTodayExercices] = useState();

  useEffect(() => {
    fetchBattle()
  }, [])
  
  const fetchBattle = async () => {
    try {

      const { todayExercices } = await api.axios.get('/v1/user/session')
      setTodayExercices(todayExercices)
    } catch (error) {}
  }

  return (
    <div>
      Hello World from battle page
    </div>
  )
}

export default Battle
