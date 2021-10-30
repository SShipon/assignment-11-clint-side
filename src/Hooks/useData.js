import { useEffect, useState } from "react"

const useData = ()=> {
    const [details, setDetails] = useState([])
    const [lode, setLode] = useState(true)

     
    console.log(details)
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data=>
            {setDetails(data);setLode(false)})
    },[]);
    return{
        details,
        lode
    }
}
export default useData;