import * as React from "react";
import Layout from "../components/layout";

import chloroboss4 from "../images/chlorobo/chloroboss4.png";

// markup
function Bcbf () {
    return (
        <Layout>
            <h1>Bee Cave BuzzFest - Arcos Dance</h1>
            <div className="blog-container">
                <p>Video engineering and automation for Arcos Dance's piece at Bee Cave BuzzFest 2022. Buzzfest is an award-winning annual tech-art festival featuring nationally acclaimed electronic music performers and immersive light and sound art installations.</p>
                <div className="center"><img className="chlorobo-pic" src={chloroboss4}/></div>
            </div>
        </Layout>
    )
}

export default Bcbf;