import * as React from "react";
import Layout from "../components/layout";

import kaiser1 from "../images/kaiser/kaiser1.jpg";
// import kaiser2 from "../images/kaiser/kaiser2.jpg";
import kaiser3 from "../images/kaiser/kaiser3.jpg";
// import kaiser4 from "../images/kaiser/kaiser4.jpg";
import kaiser5 from "../images/kaiser/kaiser5.jpg";
// import kaiser6 from "../images/kaiser/kaiser6.jpg";
import kaiser7 from "../images/kaiser/kaiser7.jpg";
// import kaiser8 from "../images/kaiser/kaiser8.jpg";
// import kaiser9 from "../images/kaiser/kaiser9.jpg";
import kaiser10 from "../images/kaiser/kaiser10.jpg";
// import kaiser11 from "../images/kaiser/kaiser11.jpg";
import kaiser12 from "../images/kaiser/kaiser12.jpg";


// markup
function Kaiser () {
    return (
        <Layout>
            <h1>Der Kaiser Von Atlantis</h1>
            <div className="blog-container">
                <p>2022 - Projection and media design for Viktor Ullmann's 1944 one-act opera.</p>
                <div className="center"><img className="chlorobo-pic" src={kaiser1}/></div>
                {/* <div className="center"><img className="chlorobo-pic" src={kaiser2}/></div> */}
                <div className="center"><img className="chlorobo-pic" src={kaiser3}/></div>
                {/* <div className="center"><img className="chlorobo-pic" src={kaiser4}/></div> */}
                <div className="center"><img className="chlorobo-pic" src={kaiser5}/></div>
                {/* <div className="center"><img className="chlorobo-pic" src={kaiser6}/></div> */}
                <div className="center"><img className="chlorobo-pic" src={kaiser7}/></div>
                {/* <div className="center"><img className="chlorobo-pic" src={kaiser8}/></div> */}
                {/* <div className="center"><img className="chlorobo-pic" src={kaiser9}/></div> */}
                <div className="center"><img className="chlorobo-pic" src={kaiser10}/></div>
                {/* <div className="center"><img className="chlorobo-pic" src={kaiser11}/></div> */}
                <div className="center"><img className="chlorobo-pic" src={kaiser12}/></div>
            </div>
        </Layout>
    )
}

export default Kaiser;