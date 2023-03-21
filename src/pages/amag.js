import * as React from "react";
import Layout from "../components/layout";

import amag1 from "../images/amag/amag1.jpg";
import amag2 from "../images/amag/amag2.jpg";
import amag3 from "../images/amag/amag3.jpg";
import amag4 from "../images/amag/amag4.jpg";
import amag5 from "../images/amag/amag5.jpg";

// markup
function Amag () {
    return (
        <Layout>
            <div className="blog-container container">
                <h1>A Million Alien Gospels</h1>
                <p>2022 - Integrated Media Design</p>
                <p>Inspired by Alice Meynell's poem, <a href="https://poetry-archive.com/m/christ_in_the_universe.html" target="_blank">“Christ in the Universe,”</a> this ballet explores the concept of receiving a gift of good news.</p>
                <p>Visuals were programmed in TouchDesigner to mimic dancers and respond to movements in real time.</p>
                <p>Written and choreographed by Dorothy Overbey</p>
                <p className="no-margin">Lighting Design: Sarah Jean Elliot</p>
                <p>Costume Design: Aaron Kubacak</p>
                <br/>
                <div className="center"><img className="chlorobo-pic" src={amag5}/></div>
                <div className="center"><img className="chlorobo-pic" src={amag1}/></div>
                <div className="center"><img className="chlorobo-pic" src={amag2}/></div>
                {/* <div className="center"><img className="chlorobo-pic" src={amag3}/></div> */}
            </div>
        </Layout>
    )
}

export default Amag;