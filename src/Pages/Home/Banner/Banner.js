import React from 'react';
import { Link } from 'react-router-dom';
import './banner.css'

const Banner = () => {
    return (
        <div className="bg ">
             <h3 className="fw-bolder text-success fs-1 mt-3">Popular Destination</h3>
            <h4 className=" txt-cl fs-1 mt-5">travel to the most beautiful places in the<br/>World Like Shara Desert<br/>That You Can Trust</h4>
            <Link to="/about"><button className="p-2 mt-3 btn fw-bolder fs-5">More Places</button></Link>
        </div>
    );
};

export default Banner;