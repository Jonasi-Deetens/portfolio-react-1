import React from 'react'
import imageList from '../assets/imageList';
import { BannerSlideshow } from '../components/BannerSlideshow';
import { Showcase } from '../components/Showcase';
import { Banner } from '../components/Banner';
import ComponentDisplay from '../components/ComponentDisplay';

const Home = () => {
    return (
        <div>
            <header className='bg-gray-50 drop-shadow-sm border-b-2 border-gray-100'>
              < Banner title = "Welcome" />
            </header>
            <main>
              < ComponentDisplay />
            </main>
            <footer>
  
            </footer>
        </div>
    );
}

export default Home;