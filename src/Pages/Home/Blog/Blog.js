import React from 'react';
import iamges from '../../../images/img/travel.jpg'

const Blog = () => {
    return (
        
        
        <div className="container text-content">
            <h1>Bolo</h1>
        <div className="row">
        <div className="col-md-6 col-sm-6">
            <img src={iamges} alt="" />
        </div>
        <div className="col-md-6 col-sm-12">
        <div className="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Blog description -1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Tripin is a responsive Drupal theme </strong> Tripin is a responsive Drupal theme with a clean and elegant design, suitable for travel agencies, tourism firms, booking agents and any business in the hospitality industry. Based on the latest version of Drupal 8, and with enhanced Layout Builder support, Tripin is your first choice for delivering feature-rich digital experiences in the travel and tourism niche.<code>.delivering feature</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Blog description -2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong> theme’s dynamic page layouts allow for numerous means of content display</strong> Tripin is an incredible new travel agency and tourism theme for Drupal. Sporting over 28 pre-built layouts, Tripin’s forward-thinking design harnesses the power and flexibility of Drupal Layout Builder to deliver stunning visuals that will excite your online audience. Fully responsive and retina-ready, Tripin is compatible with the latest version of Drupal 8, and is the ultimate asset for your next demanding Drupal project.<code>Tripin is an incredible new travel</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Blog description -3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>theme’s dynamic page layouts allow for numerous means of content display</strong> Tripin is a responsive Drupal theme with a clean and elegant design, suitable for travel agencies, tourism firms, booking agents and any business in the hospitality industry. Based on the latest version of Drupal 8, and with enhanced Layout Builder support, Tripin is your first choice for delivering feature-rich digital experiences in the travel and tourism niche.<code>Tripin is a responsive Drupal theme </code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
        </div>
        </div>

       </div>
    
       
    );
};

export default Blog;