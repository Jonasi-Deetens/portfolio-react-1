import React from 'react'

export const Counter = () => {
  return (
    <div className='flex'>
        <button onClick={() => setActive(true)} className='border-2 p-2 hover:text-white hover:bg-black'>-</button>
        <p>Count: {count}</p>
        <button onClick={() => setActive(true)} className='border-2 p-2 hover:text-white hover:bg-black'>+</button>
    </div>
  )
}
