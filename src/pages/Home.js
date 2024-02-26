import React from 'react'
import imageList from '../assets/imageList';
import { BannerSlideshow } from '../components/BannerSlideshow';
import { Showcase } from '../components/Showcase';
import { Banner } from '../components/Banner';

const Home = () => {
    return (
        <div className="App">
            <header className='bg-gray-50 drop-shadow-sm border-b-2 border-gray-100'>
              < Banner title = "Welcome" />
            </header>
            <main>
              < Showcase component={BannerSlideshow} data={imageList} />
            </main>
            <footer>
  
            </footer>
        </div>
    );
}

export default Home;