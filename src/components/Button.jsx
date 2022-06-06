import React from "react";
import { Link } from "react-router-dom";


function Button(){
    const style = {
        color:"white",
        textDecoration : "none"
    }

    return(
        <div>
            <Link style={style} to="/"><button><span className="text">go back</span></button></Link>
            
        </div>
    )
}

export default Button;