import * as React from "react";
// import { Link } from "gatsby";
import Layout from "../components/layout";
// import { Container, Row, Col } from "react-bootstrap";
import "./index.css";

import studiopic from "../images/sharedfrequencies/studiopic.jpg";
import studiodiagram from "../images/sharedfrequencies/sf_diagram.png";
import stream1 from "../images/sharedfrequencies/stream1.jpg";
import stream2 from "../images/sharedfrequencies/stream2.jpg";
import mixcover1 from "../images/sharedfrequencies/mixcover1.jpg";
import mixcover2 from "../images/sharedfrequencies/mixcover2.jpg";
import mixcover3 from "../images/sharedfrequencies/mixcover3.jpg";
import mixcover4 from "../images/sharedfrequencies/mixcover4.jpg";

function SharedFrequencies () {
    return (
        <Layout>
            <div className="blog-container container">
                <h1>Shared Frequencies</h1>
                <p>Shared Frequencies is an online community radio station started in early 2019 in Austin. We mostly stream local DJs, but also host multiple other artists as well. Check out <a href="https://sharedfrequencies.live/" target="_blank" rel="noreferrer">our website</a> or <a href="https://www.instagram.com/sharedfrequenciesradio/" target="_blank" rel="noreferrer">our Instagram</a>.</p>
                <br/>
                <p>My roles include technical expert, creative director, graphic artist, and much more. Shared Frequencies has become a catch-all creative outlet for me.</p>
                <br/>
                <img src={studiopic}/>
                <p>Before I could get too creative, I had to design the studio space and the signal flow.</p>
                <br/>
                <img src={studiodiagram}/>
                <p>The audio and video run into a PC. The PC runs TouchDesigner, realtime visual processing software, and OBS, a streaming software. The live video streams to our Facebook, Twitch, YouTube, and website.</p>
                <br/>
                <p>I find myself doing all kinds of things for the station, from graphic design to resident DJ to studio manager to new talent outreach.</p>
                <br/>
                <img src={stream1}/>
                <img src={stream2}/>
                <p>I also took it upon myself to push a cohesive creative direction for the station, which is something I had never really done before. Branding is a mysterious and powerful field, and I wanted to get my feet wet. I spent time creating covers for Mixcloud, building up social media style guides with our intern (who joined the team soon after), and creating whatever other content was needed.</p>
                <br/>
                <div className="mixcover-row">
                    <img className="mixcover" src={mixcover1}/>
                    <img className="mixcover" src={mixcover2}/>
                </div>
                <div className="mixcover-row">
                    <img className="mixcover" src={mixcover3}/>
                    <img className="mixcover" src={mixcover4}/>
                </div>
            </div>
        </Layout>
    )
}

export default SharedFrequencies;