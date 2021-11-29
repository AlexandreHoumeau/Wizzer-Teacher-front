import { TagCourse } from 'components/ui'
import React from 'react'

const CardCourse = ({ title, tag }) => {
  return (
    <div className="bg-grey-light rounded-3xl flex-shrink-0 w-72 px-8 py-6 mr-6">
      <div className="mb-6 flex">
        <TagCourse title="7 cours" />
      </div>
      <div className="font-raleway font-normal text-xl">Photoshop</div>
    </div>
  )
}

export default CardCourse
