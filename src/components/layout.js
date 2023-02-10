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
			<Container>
				<Navbar expand="lg">
					<Navbar.Brand>BENG.R ✨</Navbar.Brand>
				</Navbar>
			</Container>
			{children}
			<div className="footer">
				<p>✨ BENG.R 2023 ✨</p>
			</div>
		</Container>
	)
}