import React, { useState } from "react";
import Title from "../components/Title";
import VideoCard from "../components/VideoCard";
import Button from "../components/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
function Template({title, muscleGroup1, muscleGroup2, muscleGroup3, group1workout1, group1workout2, group1workout3, group1url1, group1url2, group1url3
, group2url1, group2url2, group2url3, group3url1, group3url2, group3url3, group2workout1, group2workout2, group2workout3, group3workout1, group3workout2, group3workout3 }){
    const [displayUpper, setDisplayUpper] = useState(false);
    const [displayMid, setDisplayMid] = useState(false);
    const [displayLower, setDisplayLower] = useState(false);

    const style = {
        color:"white",
        textDecoration : "none"
    }

    const handleClickLower = () => {
        setDisplayLower(!displayLower);
    }

    const handleClickMid = () => {
        setDisplayMid(!displayMid);
    }
    const handleClickUpper = () =>{
        setDisplayUpper(!displayUpper);
    }
    return(
        <div className="container">
            <div className="iconDiv">
                <Link style={style} to="/"><FontAwesomeIcon icon={faArrowLeft} size="lg" className="icon" /></Link>
            </div>
            
            <Title title={title}/>
            
            <div className="chest-container">

            
            <div className="upper-chest-container">
            <h2 onClick={handleClickUpper}>{muscleGroup1}</h2>
            
            {displayUpper ?
            <div>
            <VideoCard  workout={group1workout1} url={group1url1}/>
            <VideoCard  workout={group1workout2} url={group1url2}/>
            <VideoCard  workout={group1workout3} url={group1url3}/>
            </div>
            : null}
            </div>

            <div className="mid-chest-container">
            <h2 onClick={handleClickMid}>{muscleGroup2}</h2>
            
            {displayMid ?
            <div>
            <VideoCard  workout={group2workout1} url={group2url1}/>
            <VideoCard  workout={group2workout2} url={group2url2}/>
            <VideoCard  workout={group2workout3} url={group2url3}/>
            </div>
            : null}
            </div>

            <div className="lower-chest-container">
            <h2 onClick={handleClickLower}>{muscleGroup3}</h2>
            
            {displayLower ?
            <div>
            <VideoCard  workout={group3workout1} url={group3url1}/>
            <VideoCard  workout={group3workout2} url={group3url2}/>
            <VideoCard  workout={group3workout3} url={group3url3}/>
            </div>
            : null}
            </div>


            </div>
            <div className="buttonDiv">
                <Button/>
            </div>
            
            
        </div>
    )
}

export default Template;