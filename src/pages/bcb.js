import * as React from "react";
import Layout from "../components/layout";

import amag1 from "../images/amag/amag1.jpg";
import amag2 from "../images/amag/amag2.jpg";
import amag3 from "../images/amag/amag3.jpg";
import amag4 from "../images/amag/amag4.jpg";
import amag5 from "../images/amag/amag5.jpg";

// markup
function Bcb () {
    return (
        <Layout>
            <h1>Blue, Contrapposto, Blue</h1>
            <div className="blog-container">
                <p>2023 - Integrated Media Design</p>
                <p className="no-margin">Lighting Design: Gavin</p>
                <p>Costume Design: Aaron Kubacak</p>
                <div className="center"><img className="chlorobo-pic" src={amag5}/></div>
                <div className="center"><img className="chlorobo-pic" src={amag1}/></div>
                <div className="center"><img className="chlorobo-pic" src={amag2}/></div>
                <div className="center"><img className="chlorobo-pic" src={amag3}/></div>
            </div>
        </Layout>
    )
}

export default Bcb;