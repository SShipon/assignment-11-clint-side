import React from 'react';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';

const ServiceCard = (props) => {
    const {id, title, image , description, cost, rating, day} = props.services;
    return (
       

           <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card-group mt-3">
                <div className="card ">
                    <img src={image}  alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description.slice(0, 95)}</p>
                        <p>  
                       <Rating className="rating"
                        placeholderRating={rating}
                        emptySymbol={<i className="far fa-star" bg="warning" ></i>}
                        placeholderSymbol={<i className="fas fa-star" bg="warning" ></i>}
                        fullSymbol={<i className="fas fa-star" bg="warning" ></i>}/>
                    </p>
                    </div>
                    <NavLink to={`/services/${id}`} className="fw-bolder fs-5 mt-3 text-danger">Discovered More</NavLink>
                </div>
               
            </div>
           </div>
       
    );
};

export default ServiceCard;