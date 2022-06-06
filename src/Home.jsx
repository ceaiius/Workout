import React from "react";
import Title from "./components/Title"
import CardPage from "./components/CardPage";
function Home(){
    return(
        <div>
            <Title title={"Select the muscle group"}/>
            <CardPage/>
        </div>
        
    )
}

export default Home;