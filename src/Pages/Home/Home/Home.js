import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Exclusive from '../Exclusive/Exclusive';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />   
            <Services />
            <Blog/> 
            <Exclusive/>   
        </div>
    );
};

export default Home;