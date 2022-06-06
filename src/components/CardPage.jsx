import React from "react";
import Card from "./Card";

function CardPage(){
    
    return(
        <div className="card-container">
            <Card link="chest" muscleName={"Chest"} image={"https://cdn.shopify.com/s/files/1/0038/0878/8544/articles/FeaturedImage_PulledChestMuscle_1280x.jpg?v=1592870496"}/>
            <Card link="shoulders" muscleName={"Shoulders"} image={"https://o.quizlet.com/axwYP9.9-Tlk6vGp0c82rg_b.png"}/>
            <Card link="triceps" muscleName={"Triceps"} image={"https://www.kenhub.com/thumbor/qadzGnjUCG3MDYbcZWtixk924ko=/fit-in/800x1600/filters:watermark(/images/logo_url.png,-10,-10,0):background_color(FFFFFF):format(jpeg)/images/article/en/triceps-brachii-muscle/FkoImyMNi4J0Q1AzCNhLw_aHliOOl62koJhumoZcUysg_vsBTp2iDc2_M._triceps_brachii_1.png.jpeg"}/>
            <Card link="back" muscleName={"Back"} image={"https://www.kenhub.com/thumbor/Yazgz78L2sj4Uf3ouUqOLWovYxg=/fit-in/800x1600/filters:watermark(/images/logo_url.png,-10,-10,0):background_color(FFFFFF):format(jpeg)/images/library/12060/Img.jpg"}/>
            <Card link="biceps" muscleName={"Biceps"} image={"https://www.kenhub.com/thumbor/0X8VRKFTJ5DT-6OaYklyFn42-xY=/fit-in/800x1600/filters:watermark(/images/logo_url.png,-10,-10,0):background_color(FFFFFF):format(jpeg)/images/library/14480/biceps_intro.png"}/>
            <Card link="calves" muscleName={"Calves"} image={"https://www.ericfavre.com/lifestyle/uk/wp-content/uploads/sites/15/2021/09/mollet-anatomy-1024x1024-1.jpg"}/>
            <Card link="quads" muscleName={"Quads"} image={"https://theislander.net/wp-content/uploads/Quadriceps-muscles.png"}/>
            <Card link="glutes" muscleName={"Glutes"} image={"https://c8.alamy.com/comp/G1HD2P/gluteal-muscles-gluteus-maximus-anatomy-muscles-isolated-on-white-G1HD2P.jpg"}/>

        </div>
    )
}

export default CardPage