import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/hmp3.svg";  
import Common from './Common';  


const Home = () => {
    return(
        <>

        <Common name= "Keep The Activities Simple, Effective And Creative. 
        Help Your Kids Learn And Enjoy With " 
        
        imgsrc= {web}
        visit= "/service" btname= "Get Started"    />



 
        </>
    );
};



export default Home;



