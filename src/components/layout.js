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
          		<title>Ben Randall</title>
          		<link rel="canonical" href="http://benrandall.me" />
        	</Helmet>
			<Navbar expand="lg">
				<Navbar.Brand>Ben Randall ✨</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav as="ul" className="ml-auto">
						<Nav.Item as="li"><Link to="/">Home</Link></Nav.Item>
						{/* <Nav.Item as="li"><Link to="/portfolio/">Contact</Link></Nav.Item> */}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			{children}
			<div className="footer">
				<p>✨ Benjamin Randall 2021 ✨</p>
			</div>
		</Container>
	)
}