import React from 'react';
import img1 from '../../../images/Destination/California.jpg'
import img2 from '../../../images/Destination/Canada.jpg'
import img3 from '../../../images/Destination/Dubai.jpg'
import img4 from '../../../images/Destination/london.jpg'
import img5 from '../../../images/Destination/Romania.jpg'
import img6 from '../../../images/Destination/Switzerland.jpg'
import './Destination.css'

const Destination = () => {
    return (
        <div>
            <h2>Top Places to Visit in the World</h2>
            <div class="row row-cols-1 row-cols-md-2">
            <div class="col">
                <div class="cards">
                <img src={img1} alt="" />      
                <div class="card-body">
                    <h4 class="card-title">California</h4>
                    <h5>United State of America</h5>
                    
                </div>
                </div>
            </div>
            <div class="col">
                <div class="cards">
                <img src={img2} alt="" />
                <div class="card-body">
                    <h4 class="card-title">Canada</h4>
                    <h5 class="card-title">Country in North America</h5>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="cards">
                <img src={img3} alt="" />      
                <div class="card-body">
                    <h4 class="card-title">Dubai</h4>
                    <h5 class="card-title" >City in the United Arab Emirates</h5>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="cards">
                    <img src={img4} alt="" />
                <div class="card-body">
                    <h4 class="card-title">London</h4>
                    <h5 class="card-title">united state kingdom of England,</h5>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="cards">
                    <img src={img5} alt="" />
                <div class="card-body">
                    <h4 class="card-title">Romania</h4>
                    <h5 class="card-title">Southeastern Europe</h5>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="cards">
                    <img src={img6} alt="" />
                <div class="card-body">
                    <h4 class="card-title">Switzerland</h4>
                    <h5 class="card-title" >Country in Europe</h5>
                </div>
                </div>
            </div>
         </div>
        </div>
    );
};

export default Destination;