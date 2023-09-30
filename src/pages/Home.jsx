import React from 'react'
import About from './About';
import Hero from '../pages/Hero';
import Parallelx from '../Components/Parallelx';
import Features from './Features';

const HomeMain = () => {
    return (
        <>
            <Hero />
            <Features />
            <Parallelx />
            <About />
        </>
    )
}

export default HomeMain