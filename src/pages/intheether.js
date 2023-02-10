import * as React from "react";
// import { Link } from "gatsby";
import Layout from "../components/layout";
import ReactPlayer from "react-player/vimeo";
import "./index.css";

import breath from "../images/ether/breath.png";
import end from "../images/ether/end.png";
import end2 from "../images/ether/end2.png";
import infinityloop from "../images/ether/infinityloop.png";
import infinityloop2 from "../images/ether/infinityloop2.png";
import infinityloop3 from "../images/ether/infinityloop3.png";
import solo from "../images/ether/solo.png";
import webinar from "../images/ether/webinar.png";
import webinar2 from "../images/ether/webinar2.png";

// markup
function InTheEther () {
    return (
        <Layout>
            <h1>In The Ether</h1>
            <div className="blog-container">
                <p><i>Credits: Experience Designer, Web Designer, Video Editor, Media Design</i></p>
                <div className="sp-blog-post"> 
                    <p>An investigation of embodiment and our virtual identity, In the Ether is a staged rehearsal of possible cyborg realities. Utilizing live streaming, emergent technologies and performance, In the Ether explores elements of cyborg and queer theories by challenging our core notions of perception and existence in a cybernetic world.</p>
                    <p>In the Ether is an iteration of The Ether series, created by Erica Gionfriddo (ARCOS), that has been evolving through performances across the U.S. since 2016. This exploration of ‘self’ speaks volumes to our present moment, when the imperative to remain physically separate from others has cast humanity into the arms of virtual spaces that disincentivize embodiment while simultaneously providing access to our ever-growing global community. By advocating for expansive definitions of both body and technology, participants and spectators are invited to imagine their sense of self beyond their dominant reality and embrace the pleasurable confusion of the multiplicity of realities we are capable of co-creating.</p>
                    <p>For this production, I translated the concepts of presence, agency, and meditation to a 1 hour interactive web experience.</p>
                </div>
                <div className="sp-blog-post">
                    <img src={breath}/>
                    <img src={infinityloop}/>
                    <img src={infinityloop2}/>
                    <img src={infinityloop3}/>
                    <img src={solo}/>
                    <img src={webinar}/>
                    <img src={webinar2}/>
                    <img src={end}/>
                    <img src={end2}/>
                </div>
            </div>
        </Layout>
    )
}

export default InTheEther;