import React from "react";
import { NavLink } from "react-router-dom";
import web from '../src/images/mac.jpeg'
const Card = (props) => {
  return (
    <>
       
              <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                  <img src={props.imgsrc} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold">{props.title}</h5>
                    <p class="card-text">
                    </p>
                    <NavLink to="/Home" className="btn btn-primary">
                       Home
                    </NavLink>
                  </div>
                </div>
              </div>
            
    </>
  );
};

export default Card;
