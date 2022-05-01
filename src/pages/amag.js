import * as React from "react";
import Layout from "../components/layout";

import chloroboss1 from "../images/chlorobo/chloroboss1.png";
import chloroboss2 from "../images/chlorobo/chloroboss2.png";
import chloroboss3 from "../images/chlorobo/chloroboss3.png";
import chloroboss4 from "../images/chlorobo/chloroboss4.png";

// markup
function Amag () {
    return (
        <Layout>
            <h1>A Million Alien Gospels</h1>
            <div className="blog-container">
                <p>In <i>Chlorobo</i>, we explore what it means to be human through a series of poems, puzzles, and musical pieces.</p>
                <p>After conceptualizing the project, I worked primarily as creative director, artist, programmer, and team lead.</p>
                <p>View the project <a href="https://chlorobo.com" target="_blank" rel="noopener">here</a>.</p>
                <div className="center"><img className="chlorobo-pic" src={chloroboss4}/></div>
                <div className="center"><img className="chlorobo-pic" src={chloroboss1}/></div>
                <div className="center"><img className="chlorobo-pic" src={chloroboss2}/></div>
                <div className="center"><img className="chlorobo-pic" src={chloroboss3}/></div>
            </div>
        </Layout>
    )
}

export default Amag;