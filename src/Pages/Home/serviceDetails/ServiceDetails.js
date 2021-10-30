import { useParams } from 'react-router';
import useData from '../../../Hooks/useData';
const ServiceDetails = () => {
    const {serviceId}= useParams();
        const {details,lode} = useData();

     const serviceDetail= details.find(dt=> dt._id === (serviceId) );
    console.log(serviceDetail)

    if(lode){
        return(
             ""
        )
    }
    return (

        
        <div className="container w-75 h-25 justify-content-center">
            <div className="row col-sm-12">
                 <div class="card mb-3">
                            <img src={serviceDetail.image} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">{serviceDetail.title}</h5>
                                <p class="card-text">{serviceDetail.description}</p>
                                <p class="card-text">{serviceDetail.description}</p>
                             <h2>${serviceDetail.cost}</h2>               
                            </div>
                        </div>
            </div>
        </div>
    );
};

export default ServiceDetails;