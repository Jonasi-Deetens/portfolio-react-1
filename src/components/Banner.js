import React, { useEffect, useState } from 'react'

export const Banner = ({imageList}) => {

    const [images, setImages] = useState(imageList);
    let [counter, setCounter] = useState(0);

    useEffect(() => {
        const countInterval = setTimeout(() => { 
            if (counter < images.length-1)
                setCounter(counter + 1);
            else
                setCounter(0);
        }, 5000);
        
        return () => {
            clearInterval(countInterval);
        }
    }, [counter])
    

    return (
        <div className='w-full'>
            <picture>
                <img src={images[counter].src} alt={images[counter].alt} />
            </picture>
        </div>
    )
}
