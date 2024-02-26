import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const navItem = "m-2 p-2 bg-black text-white text-lg rounded-md hover:text-black hover:bg-pink-400 font-bold";
    const activeNavItem = "m-2 p-2 bg-cyan-400 text-black text-lg rounded-md hover:text-white hover:bg-pink-400 font-bold";
    const [activeItem, setActiveItem] = useState('home');

    return (
        <nav className='flex justify-between items-center px-10 py-5 border-b-2 border-gray-300 bg-gray-100'>
            <p className='text-4xl'>UX - Your Components</p>
            <ul className='flex '>
                <li onClick={() => setActiveItem("home")} className={activeItem === "home" ? activeNavItem : navItem}>
                <Link to="/">Home</Link>
                </li>
                <li onClick={() => setActiveItem("about")} className={activeItem === "about" ? activeNavItem : navItem}>
                <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;