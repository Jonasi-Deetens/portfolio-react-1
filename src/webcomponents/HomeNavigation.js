import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HomeNavigation = () => {
    const navItem = "m-2 p-1 border-b-2 border-black text-black text-md hover:border-pink-400 font-bold";
    const activeNavItem = "m-2 p-1 border-b-2 border-cyan-400 text-black text-md hover:border-pink-400 font-bold";
    const [activeItem, setActiveItem] = useState('home');
    const location = useLocation();

    useEffect(() => {
      switch (location) {
        case "/":
            setActiveItem('home');
            break;
        case "/components":
            setActiveItem('components');
            break;
        case "/about":
            setActiveItem('about');
            break;
        default:
            break;
      }
    }, [location])
    
    return (
        <nav className='px-10 w-full text-center fixed z-50'>
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
    );
};

export default HomeNavigation;