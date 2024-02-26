import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const navItem = "m-2 p-2 bg-black text-white text-lg rounded-md hover:text-black hover:bg-cyan-400";

    return (
        <nav className='flex justify-between items-center px-10 py-5 border-b-2 border-gray-300 bg-gray-100'>
            <h1 className='text-4xl'>UX - Your Components</h1>
            <ul className='flex '>
                <li className={navItem}>
                <Link to="/">Home</Link>
                </li>
                <li className={navItem}>
                <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;