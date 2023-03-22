import * as React from "react";
import Layout from "../components/layout";

import birthing1 from "../images/bcb/birthing.jpg";
import birthing2 from "../images/bcb/birthing-2.jpg";
import birthing3 from "../images/bcb/birthing-3.jpg";
import drt1 from "../images/bcb/drt-1.jpg";
import drt2 from "../images/bcb/drt-2.jpg";

// markup
function Bcb () {
    return (
        <Layout>
            <div className="blog-container container">
                <h1>Blue, Contrapposto, Blue</h1>
                <p>2023 - Media Design, Projection Design, Video Engineering</p>
                <p></p>
                <p>Written and choreographed by Venese Alcantar</p>
                <p>Lighting Design: Gavin Strawnato</p>
                <p>Costume Design: Aaron Kubacak</p>
                <br/>
                <div className="center"><img className="chlorobo-pic" src={drt1}/></div>
                <div className="center"><img className="chlorobo-pic" src={drt2}/></div>
                <div className="center"><img className="chlorobo-pic" src={birthing1}/></div>
                <div className="center"><img className="chlorobo-pic" src={birthing2}/></div>
                <div className="center"><img className="chlorobo-pic" src={birthing3}/></div>
            </div>
        </Layout>
    )
}

export default Bcb;