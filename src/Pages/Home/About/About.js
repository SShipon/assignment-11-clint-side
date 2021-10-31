import React from 'react';
import './about.css'
import images from '../../../images/about/aboutimg.jpg';
import images2 from '../../../images/about/aboutimg2.jpg';

const About = () => {
    return (
    <div>                      
     <div className="row container-fluid">
          <h2 className="fw-bolder text-success mt-5">ABOUT US</h2>
         <h1 className="fw-bolder mt-3 travel">Travel Booking</h1>
         <p className="fw-bolder fs-5">Suffered alteration in some form, by injected humour<br /> or good day randomised booth anim 8-bit <b/>hella wolf moon beard words.</p>
                 
         <button className="mb-5 mt-5 w-25 m-auto fw-bolder btn">More About Us</button>
    </div> 
     <div className="main-about">
        <div className="container">
        <div className="row">
  
        <div className="col-lg-6 col-sm-6 col-12">
          <img className="w-100 h-50" src={images} alt="" />
          <h4 className="mt-2">Places Story</h4>
            <p>Consulting represents success at realizing the company is going in the wrong direction. The only time the company fails is when it is not possible to do a turnaround anymore. We help companies pivot into more profitable directions where they can expand and grow. It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes.

             Consulting represents success at realizing the company is going in the wrong direction. The only time the company fails is when it is not possible to do a turnaround anymore. We help companies pivot into more profitable directions where they can expand and grow. It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes.</p>
        </div>
        <div className="col-lg-6 col-sm-6 col-12">
        <img className="w-100 h-50" src={images2} alt="" />
            <h4 className="mt-2">Places Story</h4>
            <p>Consulting represents success at realizing the company is going in the wrong direction. The only time the company fails is when it is not possible to do a turnaround anymore. We help companies pivot into more profitable directions where they can expand and grow. It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes.

             Consulting represents success at realizing the company is going in the wrong direction. The only time the company fails is when it is not possible to do a turnaround anymore. We help companies pivot into more profitable directions where they can expand and grow. It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes.</p>
        </div>
        </div>

       </div>
     </div>
     

</div> 

                        
    );
};

export default About;