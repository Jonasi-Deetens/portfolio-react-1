import React, { useEffect, useState } from 'react'

export const Timer = () => {
    const [active, setActive] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        if (active){
            const timerInterval = setInterval(() => {
                setTime(time + 0.01);
            }, 10);

            return() => clearInterval(timerInterval);
        }
    }, [active, time]);

    return (
        <div>
            <p>Time elapsed: {time.toFixed(2)}s</p>
            <button onClick={() => setActive(true)} className='border-2 px-2 active:text-black active:bg-pink-400 hover:bg-cyan-400'>Start</button>
            <button onClick={() => setActive(false)} className='border-2 px-2 active:text-black active:bg-pink-400 hover:bg-cyan-400'>Stop</button>
            <button onClick={() => setTime(0)} className='border-2 px-2 active:text-black active:bg-pink-400 hover:bg-cyan-400'>Reset</button>
        </div>
    )
}
