import * as React from "react";
// import { Link } from "gatsby";
import Layout from "../components/layout";
import ReactPlayer from "react-player";
import "./index.css";
// import { Container } from "react-bootstrap";

import tvtest from "../images/staticpillars/tvtest.gif";
import tvs from "../images/staticpillars/tvs.gif";
import pc1 from "../images/staticpillars/img_8788.jpg";
import pc2 from "../images/staticpillars/img_8789.jpg";
import depth1 from "../images/staticpillars/img_8871.jpg";
import depth2 from "../images/staticpillars/img_8872.jpg";
import build1 from "../images/staticpillars/img_8873.jpg";
import build2 from "../images/staticpillars/img_8874.jpg";
import shelves1 from "../images/staticpillars/img_8965.jpg";
import shelves2 from "../images/staticpillars/img_9010.jpg";
import ruttetra from "../images/staticpillars/russetra.jpg";
import diagram from "../images/staticpillars/diagram.png";
import screenshot6 from "../images/staticpillars/screenshot-6.png";
import screenshot7 from "../images/staticpillars/screenshot-7.png";
import screenshot8 from "../images/staticpillars/screenshot-8.png";
import syphon from "../images/staticpillars/syphon.png";
import gif1 from "../images/staticpillars/ezgif-1-1c6d8c66781c.gif";
import gif2 from "../images/staticpillars/ezgif-1-5b7b370708b1.gif";
import sp1 from "../images/staticpillars/sp1.gif";
import sp2 from "../images/staticpillars/sp2.gif";
import demo1 from "../images/staticpillars/demo.gif";
import demo2 from "../images/staticpillars/demo2.gif";
import DCP_4521 from "../images/staticpillars/DCP_4521.jpg";

// markup
function Staticpillars () {
    return (
        <Layout>
            <h1>Static Pillars</h1>
            <div className="blog-container">
                <div className="sp-blog-post">
                    <p><em>Static Pillars</em> is an interactive art installation in which the audience sees a reflection of themselves represented on obsolete technology. The experience is meant to be a discovery of interactivity.</p>
                    <div className="reactplayer-wrapper">
                        <ReactPlayer className="reactplayer-widthfull" url="https://player.vimeo.com/video/308233842" width="100%" height="100%" controls={true} muted={false} playing={false} loop={false} playsinline/>
                    </div>
                    <br/>
                    <p>This project was my first introduction to the world of interactive media design. Below is a blog-style journal of my process.</p>
                </div>
                <h2>[8/28/18]</h2>
                <div className="sp-blog-post">
                    <p><i>A proposal...</i></p>
                    <p>At its core, my creative project will juxtapose cutting edge interactive visuals on technologies of the past in a seamless way. I will design and build an interconnected system of CRT TVs that will display interactive visuals as one continuous image. Each TV will be in it’s own custom-build wooden box, which will allow me to stack the TVs into a sort of makeshift sculpture. This system doubles as visual tool for live music performances and an art installation that can be simply set up and switched on. I want to do this project because I believe people will be captivated by the visuals and how the system works.</p>
                    <p>This project will require quite a lot of hardware. I will need 8 CRT TVs to function as the screen, 8 custom-built wooden cases to hold each TV, 1 custom-built computer to run TouchDesigner and hold 2 graphics cards to total 8 hdmi/dvi outputs. Additionally, I will need hdmi/dvi to composite video converters and various other cables and power sources to support the infrastructure.</p>
                    <p>I will learn how to create digital art for performances and installations and will research building a computer, learn the TouchDesigner program, and finally create the art that will be displayed. I will be creating art that utilizes my computer science background and blends my passion for interactive art, music, and technology in a unique way. My primary faculty mentor, Sven Ortel, has deep knowledge of performance art and technology will be able steer me to use the best technologies and connect me with additional helpful people. This project will help push me to research and learn more about digital interactive art.</p>
                </div>
                <h2>[9/18/18]</h2>
                <div className="sp-blog-post">
                    <p><i>Nothing gets done without some proper planning...</i></p>
                    <p>I spend the first two weeks consulting with my faculty mentors Sven Ortel and Michael McKellar about many different aspects of the project. I have also named my project "Static Pillars," but I expect that will most likely change as the project evolves.</p>
                    <p>With Sven's help, I formulated a plan of attack. I would divide my project into two main phases; first, I would build the bulk of the infrastructure needed to run my project. This includes researching technologies, gathering parts, and putting everything together. Next, I would focus on the creative aspect of the project; this will include formulating a message or idea and visualizing it through art.</p>
                    <p>For now, I'm deep into phase 1. I ended up deciding that the best way to run my project was to build a Windows PC with enough graphics processing power to run eight displays.  After I finished some rough budgeting on the project as a whole, Michael helped me pick appropriate parts for a PC and I ordered them shortly after. I used PC Part Picker to keep myself organized. You can view my build <a href="https://pcpartpicker.com/user/ben_randall/saved/GtqdXL" target="_blank">here.</a></p>
                    <p>As I've never built a PC before, or even know if this whole system is going to work, I am a little anxious and excited to see where the next two weeks takes me. Once the final piece of the PC ships to me on Saturday, I will work on building the rig and immediately start testing and experimenting with displays. In about two weeks, I'm excited to test out some visual ideas and sketches at a <a href="https://www.residentadvisor.net/events/1161125" target="_blank">event</a> I am organizing. So far, I have 4 of the ideal 8 CRT TV's in my possession and I can't wait to test them out.</p>
                </div>
                <h2>[10/01/18]</h2>
                <div className="sp-blog-post">
                    <p><i>Testing & Inspiration</i></p>
                    <p>The past two weeks have been busy. I have finished my PC build. The two GeForce 1050's are shown below.</p>
                    <p>
                        <img src={pc1}></img>
                        <img src={pc2}></img>
                    </p>
                    <p>Once I finished the computer, I immediately ordered HDMI to RCA converters and got to work testing the CRT TV's.</p>
                    <p><img src={tvtest}></img></p>
                    <p>With a little tweaking, the setup worked almost immediately. I figured out later that the bottom right TV's converter was set to <a href="https://www.diffen.com/difference/NTSC_vs_PAL" target="_blank">PAL instead of NTSC.</a></p>
                    <p>On Saturday, I got a chance to use the TV's at a show my group "RTFX" put on at 21st Street Co-op called Neuromancy RTFX. In addition to an installation piece, the TV's work great as a performance tool. Having a 2x4 wall of 8 TV's displaying one continuous image would make this effect even more impressive.</p>
                    <p><img src={tvs}></img></p>
                    <p>This is slightly off topic, but here's a short video of the show we put on. It's inspiring to see what visuals people got into and was fun to hear people talk about how cool the set up was. As you can see, we also set up lights and a projector where we were showing separate visuals at the same time.</p>
                    <div className="reactplayer-wrapper">
                        <ReactPlayer className="reactplayer-widthfull" url="https://www.youtube.com/embed/qp499WOMxIw" width="100%" height="100%" controls={true} muted={false} playing={false} loop={false} playsinline/>
                    </div>
                </div>
                <div className="sp-blog-post">
                    <p>Looking forwards to the future, here are some thoughts for the next two weeks:</p>
                    <p><i>Research & Development:</i></p>
                    <p>I am currently researching the Intel RealSense camera in order to capture input. The RealSense camera integrates with TouchDesigner nicely and provides many functions I can experiment with later.</p>
                    <p><i>Ideation:</i></p>
                    <p>On Sunday I visited the Generative Art Project here in Austin. While it was inspiring, a talk with the owners led me to the realization that I was pulled more towards using technology for entertainment rather than fine art. Sometimes you have to get ideas of what you don't want to do before you know what you do want to do.</p>
                    <p><i>Design:</i></p>
                    <p>Once I decide on a general path of ideas, I will start to design the physical structures to hold the TV's and start on art direction. I'm estimating that this phase will begin in another three weeks, about October 22.</p>
                    <p><i>Implementation:</i></p>
                    <p>After some design, the implementation will begin. I'm estimating this will start in November.</p>
                </div>
                <h2>[10/15/18]</h2>
                <div className="sp-blog-post">
                    <p><i>Gathering Materials</i></p>
                    <p>My Intel RealSense camera arrived a few days ago and I've been playing around with it to see what it can do. I was initially disappointed because I thought it would support hand and face recognition out of the box, but it doesn't. However, the depth camera works pretty well and I haven't even begun to scratch the surface of what I can possibly use it for.</p>
                        <img src={depth1}/>
                        <img src={depth2}/>
                    <p>I spent a while planning the physical structure that would hold the TV's as well. I decided to build individual cases for each TV rather than a giant shelf so that I can transport them easier. Now I just have to build the thing...</p>
                        <img src={build1}/>
                        <img src={build2}/>
                    <p>Additionally, I have secured four more 26" CRT TV's... but they are all in Dallas. I guess I'll be making a road trip this weekend. These TV's are harder to find then I thought they'd be.</p>
                </div>
                <div className="sp-blog-post">
                    <p><i>Research & Development:</i></p>
                    <p>I am currently researching the Intel RealSense camera in order to capture input. The RealSense camera integrates with TouchDesigner nicely and provides many functions I can experiment with later.</p>
                    <p><i>Ideation:</i></p>
                    <p>I have some loose ideas of where I want to go with my project. I basically want to have letters from a certain language float in a matrix on the screens. I would analyze the depth image from the camera and have that change certain effects of the letters, perhaps color or depth from the screen.</p>
                    <p><i>Design:</i></p>
                    <p>I am planning on building one half of structure tomorrow according to my prior designs.</p>
                    <p><i>Implementation:</i></p>
                    <p>Next Saturday I will be playing another dj set with my group. I want to have half of my installation done by then (at least the physical part) and see how it goes over.</p>
                </div>
                <h2>[10/29/18]</h2>
                <div className="sp-blog-post">
                    <p><i>Construction</i></p>
                    <p>Last week I finished the construction of three "shells" for the TVs. I don't have much experience with woodworking, but it went well. After constructing them, I tried to put the TVs on top but the structure was extremely unstable. I happened to have two spare long, sturdy planks which I also painted black. With the planks, the structure is much sturdier.</p>
                    <img src={shelves1}/>
                    <img src={shelves2}/>
                </div>
                <div className="sp-blog-post">
                    <p><i>Installation vs Performance</i></p>
                    <p>As I work on this project, I keep two applications in mind: a performance piece and an installation piece. The setup is unique enough to work as either and so I am designing it in a way that is flexible. The separate pieces can all fit in my car, yet when all set up, both towers are over 10 feet tall. I am concentrating on the performance aspect right now; however the installation piece will be the final goal.</p>
                    <p><i>Performance</i></p>
                    <p>Currently, I work with two VJs; one uses VDMX and the other uses Resolume. I want them to be able to use the TV set up as a performance piece, yet still allow them to use their personal computers and controllers with minimal effort. NewTek NDI exists for this exact purpose: NewTek’s NDI technology "enables compatible systems, devices, and applications to connect and communicate over IP to share video, audio, and data." VDMX Resolume, and TouchDesigner all support NDI; it's perfect!</p>
                    <p>... until I realized TouchDesigner requires a commercial or educational license to use the NDI TOP. To work around this, I had my VJs install TouchDesigner on their machines, and set up this very simple network:</p>
                    <img src={syphon}/>
                    <p>I then have them route their respective VJ software to output using <a href="http://syphon.v002.info/" target="_blank">Syphon</a> and then connect their Touch Out TOP to my Touch In TOP over a local network. This workaround probably exists in order to get TouchDesigner on people's machines, but it works for now and doesn't require an expensive license.</p>
                </div>
                <h2>[11/12/18]</h2>
                <div className="sp-blog-post">
                    <p><i>Demo</i></p>
                    <p>Last week I spent time setting up a small-scale demo; I used four TVs instead of the planned eight. An important part of this project, to me, is adjusting for the spaces between displays (aka bezel correction). The animations feel more like a part of the real world when they have been spaced properly.</p>
                    <img src={gif1}/>
                    <p>I simply used TouchDesigner's Crop TOP to overshoot the bounds and added them back together, resulting in the triangle image below. Of course, I could also space individual containers in the parent container, but I found this way easier to think about and adjust.</p>
                    <img src={screenshot7}/>
                    <img src={screenshot8}/>
                    <p>As you can see in the gif below, I began to experiment with the RealSense camera to provide interactivity. I am moving the camera around quite a bit, but you can see the outline of a friend who was standing directly in front of me. The extra noise was a nearby wall.</p>
                    <img src={gif2}/>
                </div>
                <div className="sp-blog-post">
                    <p><i>Technical Diagram</i></p>
                    <p>As I begin to plan an installation of this project, I've come to realize that an important part of the process is communicating your ideas to the fullest extent with others. I sketched up this diagram to represent the spacial and electrical requirements of the final product.</p>
                    <img src={diagram}/>
                </div>
                <div className="sp-blog-post">
                    <p><i>Budget</i></p>
                    <p>I have found that I severely misjudged my initial budget. I initially did no planning on how I was to make the installation interactive, so I had to add the cost of the depth camera to my total. With that, I also had to buy a fairly expensive extension cable for the camera. Additionally, all the wood, screws, brackets, paint, and power tool rental added up quickly. My total cost over budget was about $350.</p>
                    <img src={screenshot6}/>
                </div>
                <div className="sp-blog-post">
                    <p><i>What's Next</i></p>
                    <p>I am reaching the final stretch of the technical aspect of this project. Everything I've planned for has worked so far. Next, I will be spending time gathering inspiration and creating visuals for the final installation.</p>
                </div>
                <h2>[11/29/18]</h2>
                <div className="sp-blog-post">
                    <p><i>Final Construction</i></p>
                    <p>I put the final touches on the TV tower last week. It stands a little over 6 feet tall.</p>
                    <img src={demo1}/>
                    <p>My original plan was to have 8 TVs, but considering the goal of interactivity, this ended up not making sense. I could barely interact with the top of the frame when everything was put together. I could've planned to have 9 TVs in a 3x3, but that is more outputs than my computer supports.</p>
                </div>
                <div className="sp-blog-post">
                    <p><i>Visuals</i></p>
                    <p>The visuals are starting to come out nicely as well. I have been inspired by the Rutt/Etra video synthesizer process, which results in images seen below.</p>
                    <img src={ruttetra}/>
                    <p>Here's an off-target video of my first attempts</p>
                    <img src={demo2}/>
                    <p>I will continue to refine down this path and prepare for the installation next weekend.</p>
                </div>
                <h2>[3/16/19]</h2>
                <div className="sp-blog-post">
                    <p><i>SXSW</i></p>
                    <p>On the Saturday of South by Southwest, I set up one of the TV's at a techno showcase.</p>
                    <img src={sp1}/>
                    <img src={sp2}/>
                    <p>People seemed to enjoy it.</p>
                </div>
                <div className="sp-blog-post">
                    <img src={DCP_4521}/>
                </div>
                <h2>[12/7/18]</h2>
                <div className="sp-blog-post">
                    <p><i>Final Installation</i></p>
                    <p>I set up the TV's in the Winship building on campus at UT for the AudioPixelCollider VJ battle.</p>
                    <div className="reactplayer-wrapper">
                        <ReactPlayer className="reactplayer-widthfull" url="https://player.vimeo.com/video/308233842" width="100%" height="100%" controls={true} muted={false} playing={false} loop={false} playsinline/>
                    </div>
                    <br/>
                    <p>The installation ended up going over very nicely. People enjoyed the discovery of walking up to the TV's and having a conversation with their friends about the installation.</p>
                </div>
            </div>
        </Layout>
    )
}

export default Staticpillars;