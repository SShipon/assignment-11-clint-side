import React from 'react';
import image from '../../../images/about/aboutimg.jpg'
import image2 from '../../../images/about/aboutimg2.jpg'
import image3 from '../../../images/about/aboutimg2.jpg'

const Exclusive = () => {
    return (   
       
    <div className="container my-4">
         <h1>Travel smooth</h1>
    <div className="row row-cols-1 row-cols-md-3 g-4">
    <div classNmae="col">
    <div classNmae="card h-100">
      <img src={image} classNmae="card-img-top" alt="..."/>
      <div classNmae="card-body">
        <h5 classNmae="card-title">Take ClickCare of</h5>
        <p classNmae="card-text">With our all in one platform for booking and managing trains, flights, hotels and car hire with 24/7 customer support, business travel has never been smoother.</p>
      </div>
      <div class="card-footer">
        <small classNmae="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div classNmae="col">
    <div classNmae="card h-100">
      <img src={image2} classNmae="card-img-top" alt="..."/>
      <div classNmae="card-body">
        <h5 classNmae="card-title">online adoption</h5>
        <p classNmae="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div classNmae="card-footer">
        <small classNmae="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div classNmae="col">
    <div classNmae="card h-100">
      <img src={image3} classNmae="card-img-top" alt="..."/>
      <div classNmae="card-body">
        <h5 classNmae="card-title">average customer service</h5>
        <p classNmae="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div classNmae="card-footer">
        <small classNmae="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>

    </div>

   

    );
};

export default Exclusive;
