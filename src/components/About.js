import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import '../App.css';

const About = ()=>{
    return <div className="about">
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Typography sx={{fontFamily:"cursive"}} variant="h2">This is a CRUD Application</Typography>
            <Typography sx={{fontFamily:"cursive"}} variant="h2">By: MERN STACK</Typography>
            <Typography sx={{fontFamily:"cursive"}} variant="h2">&copy;:DEVELOPER: MR.RICK</Typography>
        </Box>
    </div>
}
export default About;