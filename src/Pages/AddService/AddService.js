import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'
const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        axios.post('http://localhost:5000/services', data)
        .then(res =>{
            if(res.data.insertedId){
              alert('successfully inserted!')
            }
        })
    }
    return (
    <div className="service-area">
    <h2>add Services</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
      <input {...register("title", { required: true, maxLength: 20 })} placeholder="title" />
      <textarea {...register("description", )} placeholder="description" />
      <input type="number" {...register("cost")} placeholder="cost" />
      <input type="number" {...register("rating")} placeholder="rating" />
      <input type="number" {...register("day")} placeholder="day" />
      <input {...register("image",)} placeholder="image url" />
      <input type="submit" />
    </form>
</div>
    );
};

export default AddService;