import { TagCourse } from 'components/ui'
import React from 'react'

const CardModule = ({ module }) => {
  return (
    <a alt="module" href={`/app/admin/modules/${module._id}`} className="bg-grey-light rounded-3xl flex-shrink-0 w-72 px-8 py-6 mr-6">
      <div className="mb-6 flex">
        <TagCourse type={module._exercices.length === 0 ? 'error' : 'primary'} title={`${module._exercices.length} cours`} />
      </div>
      <div className="font-raleway font-normal text-xl">{module.title}</div>
    </a>
  )
}

export default CardModule
