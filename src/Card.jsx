import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/homep3.png';




const Card = (props) => {    
    return(
        <>

     
    <div className= "col-md-4 col-10 mx-auto">

       <div className="card" >
          <img src= {props.imgsrc} class="card-img-top" alt="image-alt"  />
          <div className="card-body">
             <h5 className="card-title font-weight-bold">{props.title}</h5>
             <p className="card-text">
             We are a leading online store in India, perfect for buying educational kids learning products.
             </p>
             <NavLink to="/contact" class="btn btn-danger">Order Now</NavLink>
          </div>
        </div>

    </div>
       
        




        </>
    );
};



export default Card; 



