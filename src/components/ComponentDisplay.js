import React from 'react'
import { BannerSlideshow } from './BannerSlideshow';
import imageList from '../assets/imageList';
import { Showcase } from './Showcase';
import { Timer } from './Timer';
import { Counter } from './Counter';

const ComponentDisplay = () => {
    return (
        <div className='flex flex-wrap lg:flex-nowrap lg:flex-row w-10/12 m-auto justify-between'>
            <section className='p-5 w-full sm:w-2/5 lg:w-1/3 mx-2 my-5'>
                < Showcase component={BannerSlideshow} data={imageList} title={"Slideshow"} />
            </section>
            <section className='p-5 w-full sm:w-2/5 lg:w-1/3 mx-2 my-5'>
                < Showcase component={Counter} data={""} title={"Counter"} />
            </section>
            <section className='p-5 w-full sm:w-2/5 lg:w-1/3 mx-2 my-5'>
                < Showcase component={Timer} data={""} title={"Timer"} />
            </section>
        </div>
    )
}

export default ComponentDisplay;