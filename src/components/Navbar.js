import { Container, Nav, Navbar } from "react-bootstrap"
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg"
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/githubIcon.png";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])



    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggle-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            to="/"
                            href="/"
                            className={activeLink === 'banner' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => setActiveLink('banner')}>
                            Home
                        </Nav.Link>
                        <Nav.Link
                            to="/about"
                            href="about"
                            className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => setActiveLink('about')}>
                            About
                        </Nav.Link>
                        <Nav.Link
                            to="/projects"
                            href="projects"
                            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => setActiveLink('projects')}>
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            to="/contact"
                            href="contact"
                            className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => setActiveLink('contact')}> 
                            Contact
                        </Nav.Link>
                    </Nav>
                    {/* <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="" /></a>
                            <a href="#"><img src={navIcon2} alt="" /></a>
                        </div>
                        <button onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                    </span> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar