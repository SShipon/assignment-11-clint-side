import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'
const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
    <div className="service-area">
    <h2>add Services</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
      <textarea {...register("description", )} placeholder="description" />
      <input type="number" {...register("price")} placeholder="price" />
      <input {...register("img", )} placeholder="image url" />
      <input type="submit" />
    </form>
</div>
    );
};

export default AddService;