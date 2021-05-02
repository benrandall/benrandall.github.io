import * as React from "react";
import Layout from "../components/layout";
import ReactPlayer from "react-player";

import prototype from "../images/desertrose/prototype.jpg";

// markup
function DesertRose () {
    return (
        <Layout>
            <h1>Desert Rose</h1>
            <div className="blog-container">
                <p>This is an interactive art installation I worked on in 2018 with one classmate. The idea was to create and protype something that wouldn feel cohesive with art direction of Coachella music festival.</p>
                <p>I used an infrared camera to create a variety of real-time interactive visuals that were to be displayed on six separate "sepals" on the rose. The visuals include interactive particle rain, "drawing" with a phone flashlight, and more. I uploaded a <a href="https://github.com/benrandall/AET_Desert_Rose" target="_blank" rel="noreferrer">demo repo</a> to allow people with TouchDesigner to download and run the visuals. </p>
                <img src={prototype}/>
                <br />
                <div className="reactplayer-wrapper">
                    <ReactPlayer className="reactplayer-widthfull" url="https://player.vimeo.com/video/311719149" width="100%" height="100%" controls={true} muted={false} playing={false} loop={false} playsinline/>
                </div>
            </div>
        </Layout>
    )
}

export default DesertRose;