import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {

    const [serviecs, setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div className="container-fluid mt-5">
            <h1 className="fw-bolder" style={{color:"red"}}>Recent Trips</h1>
         
            <div className="row pb-5">
                    {
                            serviecs?.map((service, index) => <ServiceCard
                            services={service}
                            key={index}
                            
                            ></ServiceCard>)
                    }
            </div>
          
        </div>
    );
};

export default Services;