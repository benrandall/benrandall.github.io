import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";

import larutaheader from "../images/laruta/larutaheader.jpg";
import screenshotA from "../images/laruta/screenshot1.png";
import screenshotB from "../images/laruta/screenshot2.png";
import sysdiagram from "../images/laruta/LRTA-SystemsDiagram01_02.png";
import softwareflow from "../images/laruta/softwareflow.png";
import obs from "../images/laruta/obs.png";
import audio from "../images/laruta/audio.png";
import newtworkfull from "../images/laruta/newtworkfull.png";
import network1 from "../images/laruta/network1.png";
import network2 from "../images/laruta/network2.png";
import network3 from "../images/laruta/network3.png";
import network4 from "../images/laruta/network4.png";
import network5 from "../images/laruta/network5.png";
import qlab from "../images/laruta/qlab.png";
import osc1 from "../images/laruta/Network_10-27-2020_OSCcallbacks_load-900px.png";
import osc2 from "../images/laruta/Network_10-27-2020_presetutilities_loadpreset-900px.png";
import osc3 from "../images/laruta/Network_10-27-2020_OSCcallbacks_msg.png"
import img0 from "../images/laruta/Untitled.png";
import img1 from "../images/laruta/Untitled (1).png";
import img2 from "../images/laruta/Untitled (2).png";
import img3 from "../images/laruta/Untitled (3).png";
import img4 from "../images/laruta/Untitled (4).png";


// markup
function Laruta () {
    return (
        <Layout>
            <div className="blog-container container">
                <h1>La Ruta</h1>
                <img src={larutaheader}/>
                <h2>Building a Remote Production Desk with TouchDesigner</h2>
                <p>In Isaac Gómez's La Ruta, we are told the heartbreaking story of a border town, a bus route and the women of Ciudad Juárez. Inspired by real testimonies from women affected by the ongoing femicides along the border, La Ruta weaves together beautiful storytelling and music in a celebration of the resilience of Mexican women in the wake of tremendous loss. Read more about this stage play and its production <a href="https://www.notion.so/utim/Building-a-Remote-Production-Desk-with-TouchDesigner-0732e0f8f2464a38aecc14a910ad514c#87f9cf8aab1b4c97a2c7dcb7bb42290f" target="_blank" rel="noreferrer">here</a>.</p>
                <br/>
                <p>I was brought into the production of La Ruta after the pivot to a remote production was decided. The media designer’s role in this play, which previously was traditional media creation and stage projection, quickly grew into a massive, tangled up job of systems engineering, media design, direction, and audio engineering. John Erickson, the media designer, brought me in as his assistant. In this role, I took over solving the technical aspects of the performance, and early on we decided that our remote queuing/compositing system would primarily live in TouchDesigner.</p>
                <br/>
                <p>Our baseline goal for La Ruta was a live-streamed table read. You can imagine this as a Zoom stream of the actors rehearsing their parts from their individual homes, with less emphasis on a polished performance. As the production began to develop, the idea evolved into a Zoom/Skype call between all the actors with customizable window placements, dynamic media backgrounds, and programmable cues. From this point, we drew up a list of technical challenges: working with remote performers in multiple locations, compositing and arranging their streams in real time, having a familiar cueing system for John and our operator, and individual audio routing for all the actors. Through the planning process, John’s design choices influenced our technical needs and my technical research influenced the end design.</p>
                <br/>
                <p>Our technical objective, as it became more focused, was to be able to ingest and manipulate nine different live feeds from actors in 2D space and to recall each unique layout based on cues sent from a seperate computer running QLab. We also wanted the actor feeds to have soft, blurred edges, rather than sharp rectangular windows. Finally, the media designer (John) wanted to be able to composite the actor feeds on top of content sent from QLab , and have that final video and audio be streamed to Vimeo.</p>
                <br/>
                <p>Here’s a sneak peak of what we would end up designing, with this in mind:</p>
                <br/>
                <Row>
                    <Col><img src={screenshotA}/></Col>
                    <Col><img src={screenshotB}/></Col>
                </Row>
                <p>So, with the goal outlined, let’s take a look at the final system diagram:</p>
                <img src={sysdiagram}/>
                <p>This is a little dense, so here’s the software system flow. The actor feeds are individually sent to the main PC via OBS.Ninja.</p>
                <div className="center"><img src={softwareflow}/></div>
                <p>The OBS.Ninja browser sources are arranged in a 3×3 grid like so.</p>
                <img src={obs}/>
                <p>OBS also receives the audio from the audio desk. A soundboard operator is controlling OBS with an Akai APC MKII.</p>
                <img src={audio}/>
                <p>Video and audio is routed to TouchDesigner on the same machine via NDI.</p>
                <p>The entire TouchDesigner network looks like this:</p>
                <img src={newtworkfull}/>
                <p>Again, this is a bit dense, so I’ll break it down by section. On the left we have all of the controls that have to do with the actor input feeds. The actor feeds come in through the NDIin TOP from OBS. We found it useful to have a test feed to run tech in case the actors were not on camera. The cache is there to sync audio and video. The video player pulled pre-recorded cuts of the actors out of a folder for certain parts of the performance. The switching between these was done programmatically based on cue.</p>
                <img src={network1}/>
                <p>The actor feed is then sent to the two cue decks (<b>Deck A</b> and <b>Deck B</b>) which are programmatically loaded and called based on cue. These bases are clones of <b>base_fx_Storage</b>.</p>
                <img src={network2}/>
                <p>Let’s step into <b>base_fx_Storage</b>. In here, the composite feed is cropped 3×3 and each feed is sent to an effects base. The feeds are then composited back together after effects are applied.</p>
                <img src={network3}/>
                <p>In each effects base, we can control each actor feed’s crop, soft edges, monochrome, level effects, size, and placement on a 16:9 screen.</p>
                <img src={network4}/>
                <div className="center"><img src={network5}/></div>
                <p>So how are these settings stored and recalled? This system takes advantage of the internal storage of a TouchDesigner component. With a bit of Python, we are able to store and recall all of the custom parameters of each actor feed. This part of the project was directly sourced from two of Matthew Ragan’s wonderful tutorials: <a href="https://www.notion.so/utim/Building-a-Remote-Production-Desk-with-TouchDesigner-0732e0f8f2464a38aecc14a910ad514c#6363af9f98664905aa8f69fd0588a3c9" target="_blank" rel="noreferrer">  Case Study | Custom Parameters and Cues</a> and <a href="https://matthewragan.com/2017/06/08/presets-and-cue-building-touchdesigner-099/" target="_blank" rel="noreferrer">Presets and cue building</a>.</p>
                <p>Now for the actual cueing system. The QLab Macbook controls all our cueing. On each cue, QLab sends an OSC string over the network to the TouchDesigner computer. This is an example of a sample OSC string. The media designer and I decided on a uniform cue format: <mark>"/Q/" + cue number + "/" + transition time</mark>.</p>
                <img src={qlab}/>
                <p>In TouchDesigner, we would interpret this string with the code below. This code splits up the message into the relevant parts. A message such as /Q/10/2 is interpreted like this: <mark>msg_source</mark> is the source (“Q”), <mark>preset_name</mark> is the cue number (“7”), and <mark>trans_time</mark> is the transition time that the media designer would designate, in seconds (“2”).</p>
                <img src={osc3}/>
                <p>Next, we want to load the next cue and change decks based on which deck we’re currently in.</p>
                <img src={osc1}/>
                <p>In <mark>load_preset</mark>, we fetch the stored preset from the storage base’s internal memory, and load each preset into the target deck.</p>
                <img src={osc2}/>
                <p>Once the new deck has been loaded and crossfaded appropriately, we can composite the media video feed from the QLab computer onto this actor feed setup. We have two feeds below: a live feed (<b>comp2</b>) and a tech feed (<b>comp3</b>).</p>
                <img src={img0}/>
                <p>The media designer and I could adjust and compare cues and not worry about disrupting the final feed during tech rehearsals. Below, you can see the screen I had set up to see the final feed, the tech/storage feed, audio signal, a list to load cues into the storage feed, and a settings panel for adjusting the individual actor feeds.</p>
                <img src={img1}/>
                <p>A few custom cues had videos that played on top of the actor feeds, so another video player was added. The final products are sent to a director/stage manager monitor and a tech monitor, as well as the streaming computer via NDI.</p>
                <img src={img2}/>
                <p>The director’s feed was set up as a TV a couple yards away from the TouchDesigner computer. Because of the latency added by each step of the process, our stage manager needed to call tech cues based on the final product, but also needed to call staging cues based on the actor zoom, a difference of about 5 to 15 seconds, depending on the internet that day. Below, the stage manager Skyler is viewing the final feed on the left and the OBS screen on the right.</p>
                <img src={img3}/>
                <p>Finally, on the streaming computer, we had an OBS window that accepted the TouchDesigner feed via NDI and streamed that feed to Vimeo.</p>
                <img src={img4}/>
                <p>And, voila! We had a fully remote show.</p>
                <p>Check out the TouchDesigner file <a href="http://github.com/benrandall/Remote-Production-Desk" target="_blank" rel="noreferrer">here.</a></p>
                <p></p>
            </div>
        </Layout>
    )
}

export default Laruta;