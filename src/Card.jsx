import React from "react";
import { Link } from "react-router-dom";
function Card({image, muscleName,link}){
    return(
      
            <div className="card">
                <Link to={"/" + link}>
                    <div className="imgContainer">
                        <img src={image} alt=""/>
                    </div>
                </Link>
                <div className="card-text">
                    <h2>{muscleName}</h2>
                </div>
            </div>
        
        
    )
}

export default Card;