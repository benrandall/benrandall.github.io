import * as React from "react";
import Layout from "../components/layout";

import ffd1 from "../images/ffd/ffd1.jpg";
import ffd2 from "../images/ffd/ffd2.jpg";
import ffd3 from "../images/ffd/ffd3.jpg";
import ffd4 from "../images/ffd/ffd4.jpg";
import ffd5 from "../images/ffd/ffd5.jpg";


// markup
function Bcbf () {
    return (
        <Layout>
            <div className="blog-container container">
                <h1>Fall For Dance</h1>
                <p>2021 - Immersive projection design for Fall For Dance. Media design for three unique dance pieces. Experimentation with AI video as it relates to live audio and dance.</p>
                <p>Costume Design: Katie Miller</p>
                <br/>
                <div className="center"><img className="chlorobo-pic" src={ffd1}/></div>
                <div className="center"><img className="chlorobo-pic" src={ffd2}/></div>
                <div className="center"><img className="chlorobo-pic" src={ffd4}/></div>
                <div className="center"><img className="chlorobo-pic" src={ffd5}/></div>
                <div className="center"><img className="chlorobo-pic" src={ffd3}/></div>
            </div>
        </Layout>
    )
}

export default Bcbf;