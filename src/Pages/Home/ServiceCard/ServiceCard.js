import React from 'react';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';

const ServiceCard = (props) => {
    const {_id, name, title, image , description, cost, rating, day} = props.services;
    return (
       

           <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card-group mt-3">
                <div className="card p-4">
                    <img src={image}  alt="" />
                    <div className="card-body">
                         <h3>{name}</h3>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description.slice(0, 95)}</p>
                        <p>  
                       <Rating className="rating"
                        placeholderRating={rating}
                        emptySymbol={<i className="far fa-star" bg="warning" ></i>}
                        placeholderSymbol={<i className="fas fa-star" bg="warning" ></i>}
                        fullSymbol={<i className="fas fa-star" bg="warning" ></i>}/>
                          <span style={{padding:"10px",}} >{day} day</span>
                    </p>
                      <h3>$ {cost}</h3>
                    </div>
                    <NavLink to={`/services/${_id}`} className="fw-bolder fs-5 mt-3 text-danger"><button className="btn btn-info">Discovered More</button></NavLink>
                </div>
               
            </div>
           </div>
       
    );
};

export default ServiceCard;