import React from 'react';

import HeroSection from '../../HeroSection/HeroSection';
import Cards from '../../Cards/Cards';
import Footer from '../../Footer/Footer';

import '../../../App.css';

const Home = () => {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;