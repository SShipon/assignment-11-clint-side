import Rating from 'react-rating';
import { useParams } from 'react-router';
import useData from '../../../Hooks/useData';
const ServiceDetails = () => {
    const {serviceId}= useParams();
        const {details,lode} = useData();
     const serviceDetail= details.find(dt=> dt._id === (serviceId) );
    if(lode){
        return(
             ""
        )
    }
    return (

        
        <div className="container w-75 h-25 justify-content-center">
            <div className="row col-sm-12">
                 <div class="card mb-3  p-4">
                     <img  className="" src={serviceDetail.image} alt="" />
                      <div class="card-body">
                       <h5 class="card-title">{serviceDetail.name}</h5>
                        <p class="card-text">{serviceDetail.title}</p>
                        <p class="card-text">{serviceDetail.description}</p>
                     <p>  
                           <Rating className="rating"
                           placeholderRating={serviceDetail.rating}
                           emptySymbol={<i className="far fa-star" bg="warning" ></i>}
                           placeholderSymbol={<i className="fas fa-star" bg="warning" ></i>}
                           fullSymbol={<i className="fas fa-star" bg="warning" ></i>}/>
                          <span style={{padding:"10px",}} >{serviceDetail.day} day</span>
                  </p>
                                
                             <h2>${serviceDetail.cost}</h2>               
                            </div>
                        </div>
            </div>
        </div>
    );
};

export default ServiceDetails;