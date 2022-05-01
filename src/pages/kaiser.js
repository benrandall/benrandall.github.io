import * as React from "react";
import Layout from "../components/layout";

import chloroboss4 from "../images/chlorobo/chloroboss4.png";

// markup
function Kaiser () {
    return (
        <Layout>
            <h1>Der Kaiser Von Atlantis</h1>
            <div className="blog-container">
                <p>copy for kaiser opera</p>
                <p>View the project <a href="https://chlorobo.com" target="_blank" rel="noopener">here</a>.</p>
                <div className="center"><img className="chlorobo-pic" src={chloroboss4}/></div>

            </div>
        </Layout>
    )
}

export default Kaiser;