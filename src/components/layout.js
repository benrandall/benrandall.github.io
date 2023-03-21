import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';
import bengrIcon from "../images/bengrEyePng-Transparent.png"
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "gatsby";
import { Helmet } from "react-helmet"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'


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
					<a class="navbar-brand" href="/">
    					<img className="bengr-icon" src={bengrIcon} height="20" alt=""/>
					</a>
					<Navbar.Brand>BENG.R</Navbar.Brand>
					<ThemeToggler>
						{({ theme, toggleTheme }) => (
						<label>
							<input
							type="checkbox"
							onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
							checked={theme === 'dark'}
							/>{' '}
						</label>
						)}
					</ThemeToggler>
				</Navbar>
			</Container>
			{children}
			<div className="footer">
				<p>✨ BENG.R 2023 ✨</p>
			</div>
		</Container>
	)
}