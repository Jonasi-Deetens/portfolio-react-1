import React from 'react'

export const Showcase = ({component: Component, data, title}) => {
  return (
    <div className='my-5 py-10 rounded-md bg-gray-100 drop-shadow-md text-center'>
        <h3 className='text-lg'>{title}</h3>
        <hr className='m-4 border-gray-400' />
        < Component data={data} />
    </div>
  )
}
