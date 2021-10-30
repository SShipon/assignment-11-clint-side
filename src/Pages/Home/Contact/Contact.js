 import React from 'react';
import './contact.css'

/* import icon1 from '../../../images/icon/25489.jpg'
import icon2 from '../../../images/icon/52112.jpg'
import icon3 from '../../../images/icon/blue-button-with.jpg'
 */
const Contact = () => {
    return (
        <div className="contact-body">
            <h2 className="text-white pt-5">Contact Us</h2>
            <div className="card-group pt-3 ">
                <div className="card">
                   {/*  <img src={icon1}  alt="" /> */}
                    <div className="card-body">
                    <h5 className="card-title">Phone Number</h5>
                    <p className="card-text"> +00257459 <br /> +00747227</p>
                    </div>
                </div>
                <div className="card">
               {/*  <img src={icon2} alt="" /> */}
                    <div className="card-body">
                    <h5 className="card-title">Email Address</h5>
                    <p className="card-text">eye@care.com <br /> care@gmail.com</p>
                    </div>
                </div>
                <div className="card">
                {/* <img src={icon3}  alt="" /> */}
                    <div className="card-body">
                    <h5 className="card-title">Location</h5>
                    <p className="card-text">123, southzone,<br /> Melbourne</p>
                    </div>
                </div>
                </div>
      </div>
    );
};

export default Contact; 