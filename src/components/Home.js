import React from "react";
import './Home.css'
import { Button } from "@mui/material";
import {Link} from  'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Home =()=>{
    return <div className="home_page">
        <h1>WELCOME TO RS BOOK STORE</h1>
        <p>A Place Where you Finds All your required Books.</p>
        <Button className="book_btn" LinkComponent={Link} to={`/books`}>GO To Book PAGE <ArrowRightAltIcon/></Button>
    </div> 
};

export default Home;