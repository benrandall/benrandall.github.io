import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "gatsby";
import { Helmet } from "react-helmet"

export default function Layout({ children }) {
    return (
		<Container className="layout-container">
			<Helmet>
          		<meta charSet="utf-8" />
          		<title>bengr.studio</title>
          		<link rel="canonical" href="http://bengr.studio" />
        	</Helmet>
			<Navbar expand="lg">
				<Navbar.Brand>Beng.r ✨</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
			</Navbar>
			{children}
			<div className="footer">
				<p>✨ Beng.r 2023 ✨</p>
			</div>
		</Container>
	)
}