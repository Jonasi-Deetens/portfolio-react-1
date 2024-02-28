import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const navItem = "m-2 p-1 border-b-2 border-black text-black text-md hover:border-pink-400 font-bold";
    const activeNavItem = "m-2 p-1 border-b-2 border-cyan-400 text-black text-md hover:border-pink-400 font-bold";
    const [activeItem, setActiveItem] = useState('home');
    const location = useLocation();

    useEffect(() => {
      switch (location.pathname) {
        case "/":
            setActiveItem('home');
            break;
        case "/about":
            setActiveItem('about');
            break;
        case "/components":
            setActiveItem('components');
            break;
        default:
            break;
      }
    }, [location])

    return (
        <div className='flex flex-col justify-between items-center border-gray-300 bg-gray-100 text-center'>
            <p className='text-4xl p-6 border-b-2 border-gray-300 w-full'>YouX - Your Components</p>
            <nav className='px-10 border-b-2 w-full text-center'>
                <ul className='flex justify-center'>
                    <li className={activeItem === "home" ? activeNavItem : navItem}>
                    <Link to="/">Home</Link>
                    </li>
                    <li className={activeItem === "components" ? activeNavItem : navItem}>
                    <Link to="/components">Components</Link>
                    </li>
                    <li className={activeItem === "about" ? activeNavItem : navItem}>
                    <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;