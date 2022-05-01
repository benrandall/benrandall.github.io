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
            <h1>A Million Alien Gospels</h1>
            <div className="blog-container">
                <p>2022 - Integrated Media Design</p>
                <div className="center"><img className="chlorobo-pic" src={amag5}/></div>
                <div className="center"><img className="chlorobo-pic" src={amag1}/></div>
                <div className="center"><img className="chlorobo-pic" src={amag2}/></div>
                <div className="center"><img className="chlorobo-pic" src={amag3}/></div>
                <p>Costumes - Aaron Kubachek</p>
                <p>Lighting - Sarah Jean Elliot</p>
            </div>
        </Layout>
    )
}

export default Amag;