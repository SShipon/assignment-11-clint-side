import React from 'react';
import img1 from '../../../images/doctors/main1.png'
import img2 from '../../../images/doctors/main2.png'
import img3 from '../../../images/doctors/main3.png'
import img4 from '../../../images/doctors/testimonials-main1.png'

const Doctors = () => {
    return (
        <div>
            <h2>Doctor</h2>
            <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
                <div class="card">
                <img src={img1} alt="" />      
                <div class="card-body">
                    <h5 class="card-title">Dr. Maria Josep</h5>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src={img2} alt="" />
                <div class="card-body">
                    <h5 class="card-title">Dr. Blasona</h5>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src={img3} alt="" />      
                <div class="card-body">
                    <h5 class="card-title">Dr. Jhonson</h5>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src={img4} alt="" />
                <div class="card-body">
                    <h5 class="card-title">Dr. Josika</h5>
                </div>
                </div>
            </div>
         </div>
        </div>
    );
};

export default Doctors;