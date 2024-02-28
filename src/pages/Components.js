import React from 'react'
import { Banner } from '../components/Banner';
import ComponentDisplay from '../components/ComponentDisplay';

const Home = () => {
    return (
        <div>
            <section className='bg-gray-50 drop-shadow-sm border-b-2 border-gray-100'>
                < Banner title = "Components" />
            </section>
            <section>
                < ComponentDisplay />
            </section>
        </div>
    );
}

export default Home;