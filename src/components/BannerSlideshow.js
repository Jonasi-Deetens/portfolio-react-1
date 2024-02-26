import React, { useEffect, useState } from 'react'

export const BannerSlideshow = ({data}) => {

    const [images, setImages] = useState(data);
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
