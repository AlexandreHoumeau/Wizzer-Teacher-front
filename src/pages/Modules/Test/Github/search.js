import { GithubIcon } from 'assets/icons'
import React from 'react'

const Search = () => {
  return (
    <div className="font-raleway">
      <div>Pour valider l'exercice merci de renseigner votre répository</div>

      <div className='flex space-x-2 items-center border px-4 border-grey rounded'>
        <GithubIcon className="" />
        <div className="h-14 mx-2 w-px bg-grey-dark" />
        <input value="/" placeholder='Nom de ton compte github' className='w-full h-full m-4' />
        <button type='submit' />
      </div>
    </div>
  )
}

export default Search
