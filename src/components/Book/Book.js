import { Button } from "@mui/material";
import React from "react";
import './Book.css';
import axios from "axios";
import {Link, useNavigate} from  'react-router-dom';

const Book = (props) => {
  const { _id, name, author, description, price, image } = props.book;
  const history = useNavigate();
  const deleteHandler = async()=>{
    await axios
    .delete(`http://localhost:5000/books/${_id}`)
    .then((res)=>res.data)
    .then(()=>alert("Book deleted Successfully"))
    .then(()=>history("/"))
  }
  
  return (
    <div className="card">
      <img src={image} alt={name} />
      <article className="by">By {author}</article>
      <article className="name">{name}</article>
      <p>{description}</p>
      <h2>Rs {price}</h2>
      <Button LinkComponent={Link} to={`/books/${_id}`} className="btn update"  sx={{mt:'auto'}}>Update</Button>
      <Button className="btn del"  onClick={deleteHandler} sx={{mt:'auto'}}>Delete</Button>
    </div>
  );
};

export default Book;
