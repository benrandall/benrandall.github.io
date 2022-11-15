import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import ReactPlayer from "react-player";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faInstagramSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import './index.css';


import profilePic from "../images/Swirl14-red5.png"
import cursor from "../images/Cursor2.png"

import pfAmag from "../images/amag.jpg"
import pfKaiser from "../images/kaiser.jpg"
import pfFfd from "../images/ffd.jpg"
import pfChlorobo from "../images/flyer-1.png"
import pfLaRuta from "../images/laRuta.png"
import pfStaticPillars from "../images/staticPillars.png"
import pfSharedFrequencies from "../images/sfstudio.png"
import pfInTheEther from "../images/intheether.png"
import pfDesertRose from "../images/desertrose.png"

// markup
function Home () {
    return (
        <Layout>
            <Container className="video-header">
                <ReactPlayer className="header-player fade-in" url="https://player.vimeo.com/video/537410608?badge=0&amp;autopause=0&amp;player_id=0" height="100%" width="100%" controls={false} muted={true} playing={true} loop={true} playsinline/>
                <Row>
                    <Col lg="3" className="fill box header-box-1">
                        {/* <p className="sparkle-line sl-top">┈⛧┈❀✧❀┈⛧┈</p> */}
                        <img className="profile-pic" src={profilePic}/>
                        {/* <p className="sparkle-line sl-bottom">┈⛧┈✧✿✧┈⛧┈</p> */}
                    </Col>
                </Row>
                <Row>
                    <Col lg="3" className="box header-box-2 fill">
                        <p className="sparkle-line sl-top">┈⛧┈❀✧❀┈⛧┈</p>
                        <div className="header-text">
                            <p>Hi, my name is Ben and I like art, music, technology, and new experiences.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="3" className="box header-box-3 fill">
                        <div className="header-text">
                            <p>My work explores generative art, transmedia storytelling, live music, and community.</p>
                        </div>
                        <p className="sparkle-line sl-bottom">┈⛧┈✧✿✧┈⛧┈</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <h2>Selected Work</h2>
                <Row>
                    <Col className="fill box-portfolio">
                        <Link className="fill" to="/amag/"><img src={pfAmag}/><h2>A Million Alien Gospels</h2></Link>
                    </Col>
                    <Col className="fill box-portfolio">
                        <Link className="fill" to="/kaiser/"><img src={pfKaiser}/><h2>Der Kaiser Von Atlantis</h2></Link>
                    </Col>
                    <Col className="fill box-portfolio">
                        <Link className="fill" to="/ffd/"><img src={pfFfd}/><h2>Fall For Dance</h2></Link>
                    </Col>
                </Row>
                <Row>
                    <Col className="fill box-portfolio">
                        <Link className="fill" to="/chlorobo/"><img src={pfChlorobo}/><h2>Chlorobo</h2></Link>
                    </Col>
                    <Col className="fill box-portfolio">
                        <Link className="fill" to="/laruta/"><img src={pfLaRuta}/><h2>La Ruta</h2></Link>
                    </Col>
                    <Col className="fill box-portfolio">
                        <Link className="fill" to="/intheether/"><img src={pfInTheEther}/><h2>In The Ether</h2></Link>
                    </Col>
                </Row>
                <Row>
                    <Col className="fill box-portfolio">
                        <Link className="fill" to="/desertrose/"><img src={pfDesertRose}/><h2>Desert Rose</h2></Link>
                    </Col>
                    <Col className="fill box-portfolio">
                        <Link className="fill" to="/sharedfrequencies/"><img src={pfSharedFrequencies}/><h2>Shared Frequencies</h2></Link>
                    </Col>
                    <Col className="fill box-portfolio">
                        <Link className="fill" to="/staticpillars/"><img src={pfStaticPillars}/><h2>Static Pillars</h2></Link>
                    </Col>
                </Row>
            </Container>
            <br/>
            <Container className="credits-container">
                <h2>Recent Credits</h2>
                <p><b>Fusebox Festival (2022)</b> - Integrated Media Designer, Video Engineer</p>
                <p><b>A Million Alien Gospels (2022)</b> - Integrated Media Designer</p>
                <p><b>Bee Cave BuzzFest (2022)</b> - Integrated Media Designer, Video Engineer</p>
                <p><b>Der Kaiser Von Atlantis (2022)</b> - Integrated Media Designer</p>
                <p><b>Fall For Dance (2021)</b> - Integrated Media Designer, Video Engineer</p>
                <p><b>Chlorobo (2021)</b> - Creative Director, Media Designer, Web Designer</p>
                <p><b>Eyes On The Sky: XR Teaser (2021)</b> - Media Designer, TouchDesigner Engineer</p>
                <p><b>In The Ether (2021)</b> - Experience Designer, Web Designer, Video Editor, Media Designer</p>
                <p><b>La Ruta (2020)</b> - Systems Engineer, TouchDesigner Engineer</p>
            </Container>
            <br/>
            <Container className="credits-container">
                <h2>Generative Art</h2>
                <p>Visit my <a href="https://www.instagram.com/beng.r/" target="_blank" rel="noreferrer">Instagram</a> for explorations in generative art.</p>
            </Container>
            <br/>
            <Container>
                <h2>Contact Me</h2>
                <p>I regularly check my email at <a href="mailto:bengr35@gmail.com" target="_blank" rel="noreferrer">bengr35@gmail.com</a></p>
                <div className="box-crystals">
                    <div className="social-links" id="crystals">
                        <img className="cursor" src={cursor}/>
                        <a className="social-link" href="mailto:bengr35@gmail.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faEnvelopeSquare} />
                        </a>
                        <a className="social-link" href="https://www.instagram.com/beng.r/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagramSquare} />
                        </a>
                        <a className="social-link" href="https://www.linkedin.com/in/benjamin-randall-ba3a55104/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a className="social-link" href="https://github.com/benrandall" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithubSquare} />
                        </a>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default Home
