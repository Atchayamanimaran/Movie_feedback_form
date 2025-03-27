import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

function FeedbackForm(props){


    const[form,setForm] =useState({
        name: "",
        movie: "",
        rating: "",
        comments: "",

    });


    const navigate= useNavigate();

    const handleSubmit= (e) =>{
        e.preventDefault();

        const existingReviews =JSON.parse(localStorage.getItem("reviews")) || [];
        const updatedReviews=[...existingReviews, form];


        localStorage.setItem("reviews", JSON.stringify(updatedReviews));
        alert("Thank you for your feedback");
        navigate("/reviews");
};

const handleChange= (e) =>{
    setForm({...form,[e.target.name]:[e.target.value]});
}
    return(
        <form onSubmit={handleSubmit} className="form">
            <label>Name: </label>
            <input type="text" name="name" onChange={handleChange} value={form.name} required/>

            <label>Movie: </label>
            <select name="movie" onChange={handleChange} value={form.movie} required>
                <option value="">select</option>
                <option value="Dragon">Dragon</option>
                <option value="Sita Raman">Sita Raman</option>
                <option value="Joe">Joe</option>
                <option value="kadhaipoma">kadhaipoma</option>
                <option value="Harry Potter">Harry Potter</option>
            </select>

            <label>Rating(1-5): </label>
            <input type="number" name="rating" onChange={handleChange} min="1" max="5" value={form.rating} required/>


            <label>Comments: </label>
            <textarea name="comments" onChange={handleChange} value={form.comments}/>

            <button type="submit">Submit</button>



        </form>
    )
}

export default FeedbackForm;