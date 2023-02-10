import * as React from "react";
// import { Link } from "gatsby";
import Layout from "../components/layout";
import "./index.css";
// import { Container } from "react-bootstrap";

// markup
function Portfolioreview () {
    return (
        <Layout>
            <h1>Portfolio Review Spring 2021</h1>
            <div className="responsive-google-slides">
                <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSrUhXohayJSdzY0-Tqy_5pJzcKOVemBDMia2Gq7-izR4GOY3-LpGZ3RmDECrOTr8Bf961OSRglxUjW/embed?start=false&loop=false" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            </div>
        </Layout>
    )
}

export default Portfolioreview;