import React, { useEffect, useState } from 'react';

const Remove = () => {
    const [services, setServices] = useState([])
    useEffect(() =>{
        fetch('https://safe-scrubland-56624.herokuapp.com/services')
        .then(res =>res.json())
        .then(result => setServices(result))

    }, []);
  
    const handleRemove = id =>{
        const url =`https://safe-scrubland-56624.herokuapp.com/services/${id}`;
        fetch(url,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(result =>{
            console.log(result);
            if(result.deletedCount){
                alert('are you sure Remove')
                const remaining = services.filter(service => service._id !==id)
                setServices(remaining)
               

            }
           
        })

    }

    return (
        <div>
            <h1>Remove Data</h1>
            {
                services.map(service => <div key={service._id}>
                    <h1>{service.name}</h1>
                    <button onClick={()=> handleRemove(service._id)}>Remove</button>
                </div>)
            }
        </div>
    );
};

export default Remove;