import React from 'react'
import Navigation from './Navigation'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'

export const Header = () => {
  return (
    <BrowserRouter>
        <div>
            <Navigation />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    </BrowserRouter>
  )
}
