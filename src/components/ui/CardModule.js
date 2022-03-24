import { TagCourse } from 'components/ui'
import React from 'react'
import classNames from 'classnames'

const CardModule = ({ module }) => {
  return (
    <a alt="module" key={module._id} href={`/app/admin/modules/${module._id}`} className="bg-grey-light rounded-3xl flex-shrink-0 w-72 px-8 py-6 mr-6">
      <div className="mb-6 flex">
        <div className={classNames(module._exercices.length === 0 ? 'bg-error-light text-error' : 'bg-primary-light text-primary', 'text-white rounded-full p-2')}>
          {module._exercices.length} cours
        </div>
      </div>
      <div className="font-raleway font-normal text-xl">{module.title}</div>
    </a>
  )
}

export default CardModule
