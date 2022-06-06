import React from "react";
import ReactPlayer from "react-player";

function VideoCard({ workout,url}){
    return(
        
            <div className="video">
                <div>
                    <h3>{workout}</h3>
                    <ReactPlayer width={300} height={300} controls={true} url={url}/>  
                </div>
                
            </div>
       
    )
}

export default VideoCard;