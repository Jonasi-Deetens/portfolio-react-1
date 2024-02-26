import React, { useEffect, useState } from 'react'

export const Timer = () => {
    const [active, setActive] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        if (active){
            const timerInterval = setInterval(() => {
                setTime(time + 1);
            }, 1000);

            return() => clearInterval(timerInterval);
        }
    }, [active, time]);

    return (
        <div>
            <p>Time elapsed: {time}s</p>
            <button onClick={() => setActive(true)} className='border-2 p-2 hover:text-white hover:bg-black'>Start</button>
            <button onClick={() => setActive(false)} className='border-2 p-2 hover:text-white hover:bg-black'>Stop</button>
            <button onClick={() => setTime(0)} className='border-2 p-2 hover:text-white hover:bg-black'>Reset</button>
        </div>
    )
}
