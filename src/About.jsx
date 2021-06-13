import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/about.svg";        
import Common from './Common';



const About = () => {
    return(
        <>

        <Common name= "Know More About Us. We Are Team Of  " 
        imgsrc= {web}
        visit= "/contact" btname= "Know More"  />
         



        </>
    );
};



export default About;



