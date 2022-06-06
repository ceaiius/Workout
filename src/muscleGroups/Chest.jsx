import React, { useState } from "react";
import Title from "../components/Title";
import VideoCard from "../components/VideoCard";
import Button from "../components/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
function Chest(){
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
            
            <Title title={"Chest exercises"}/>
            
            <div className="chest-container">

            
            <div className="upper-chest-container">
            <h2 onClick={handleClickUpper}>Upper Chest</h2>
            
            {displayUpper ?
            <div>
            <VideoCard  workout={"Incline Dumbbell Press"} url={"https://www.youtube.com/watch?v=VmB1G1K7v94&ab_channel=ScottHermanFitness"}/>
            <VideoCard  workout={"Weighted Dips"} url={"https://www.youtube.com/watch?v=2i3o0bFZT_s&ab_channel=ScottHermanFitness"}/>
            <VideoCard  workout={"Low Cable Chest Fly"} url={"https://www.youtube.com/watch?v=M1N804yWA-8&ab_channel=ScottHermanFitness"}/>
            </div>
            : null}
            </div>

            <div className="mid-chest-container">
            <h2 onClick={handleClickMid}>Mid Chest</h2>
            
            {displayMid ?
            <div>
            <VideoCard  workout={"Dumbbell Flys"} url={"https://www.youtube.com/watch?v=eozdVDA78K0&ab_channel=ScottHermanFitness"}/>
            <VideoCard  workout={"Cabble Crossovers"} url={"https://www.youtube.com/watch?v=Iwe6AmxVf7o&ab_channel=ScottHermanFitness"}/>
            <VideoCard  workout={"Diamond Push-Ups"} url={"https://www.youtube.com/watch?v=J0DnG1_S92I&ab_channel=ScottHermanFitness"}/>
            </div>
            : null}
            </div>

            <div className="lower-chest-container">
            <h2 onClick={handleClickLower}>Lower Chest</h2>
            
            {displayLower ?
            <div>
            <VideoCard  workout={"Incline Push-Up"} url={"https://www.youtube.com/watch?v=Me9bHFAxnCs&ab_channel=TigerFitness"}/>
            <VideoCard  workout={"Barbell Decline Bench Press"} url={"https://www.youtube.com/watch?v=LfyQBUKR8SE&ab_channel=ScottHermanFitness"}/>
            <VideoCard  workout={"Parallel-bar dip"} url={"https://www.youtube.com/watch?v=2z8JmcrW-As&ab_channel=Calisthenicmovement"}/>
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

export default Chest;