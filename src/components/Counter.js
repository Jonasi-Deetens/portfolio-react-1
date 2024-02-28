import React, { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className='flex items-center justify-around'>
            <button onClick={() => setCount(count - 1)} className='border-2 px-2 active:text-black active:bg-pink-400 hover:bg-cyan-400'>-</button>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)} className='border-2 px-2 active:text-black active:bg-pink-400 hover:bg-cyan-400'>+</button>
        </div>
    )
}
