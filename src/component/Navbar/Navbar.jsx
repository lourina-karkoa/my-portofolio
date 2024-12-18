import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-bootstrap';
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'
import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';


export default function Navbarr() {
  const [bgcolor, setBgcolor] = useState(false);
  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 5) {
        setBgcolor(true);
      } else {
        setBgcolor(false);
      }
    };
    window.addEventListener("scroll", handlescroll);
  }, []);
  const [text] =useTypewriter({
    words:['LOURINA KARKOA','A Front-end Developer','A Communications Enginner'],
    loop:{},
    typeSpeed:50,
    deleteSpeed:50,
  });
  return (
    <>
    <div to={'#home'} className='lk-nav'>
    <Navbar expand="lg" className={`${ bgcolor ? "LKbg-window" : ""} bg-body-tertiary lk-NAVEBAR`}>
      <Container fluid className='px-0'>
        <Navbar.Brand className='lk-window' href="#home">LOURINA KARKOA</Navbar.Brand>
        <Navbar.Toggle className={`${bgcolor ? 'text-white' : ''}`} aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav 
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
          </Nav>
          <div className={`${ bgcolor ? "lk-nav-comm" : "lk-nav-son2"} lk-nav-comm d-flex justify-content-evenly`} >
          <Nav.Link href="#home" className='lk-navbar-add'>Home</Nav.Link>
          <Nav.Link href="#About" className='lk-navbar-add'>About</Nav.Link>
          <Nav.Link href="#Services" className='lk-navbar-add'>Services</Nav.Link>
          <Nav.Link href="#Work" className='lk-navbar-add'>Work</Nav.Link>
          <Nav.Link href="#Contact" className='lk-navbar-add'>Contact</Nav.Link>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='lk-hero' id='home'>
      <h1 className='lk-hero-basic-h1'>Hello</h1>
      <div className='lk-hero-son1'>
      <h1 className='lk-hero-h1'>I AM 
        <span className='lk-hero-span'>  {text}</span>
        <span>
        <Cursor/>
        </span>
      </h1>
     
    </div>
    <div className='lk-hero-icons'>
    <NavLink className='lk-hero-navlink' href='https://www.facebook.com/lolia.rk.31?mibextid=kFxxJD'><div className='lk-hero-icon'><FontAwesomeIcon className='icon' icon={faFacebookF} /></div></NavLink>
    <NavLink className='lk-hero-navlink' href='https://www.linkedin.com/in/lourina-karkoa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><div className='lk-hero-icon'> <FontAwesomeIcon className='icon' icon={faLinkedinIn} /></div></NavLink>
    <NavLink className='lk-hero-navlink' href='https://www.instagram.com/lourina_karkoa?igsh=ZTM4ZDRiNzUwMw=='><div className='lk-hero-icon'> <FontAwesomeIcon className='icon' icon={faInstagram} /></div></NavLink>
    <NavLink className='lk-hero-navlink' href="https://t.me/Lourina_karkoa" target="_blank"><div className='lk-hero-icon'> <FontAwesomeIcon className='icon' icon={faTelegram} /></div></NavLink>
    <NavLink className='lk-hero-navlink' href='https://github.com/lourina-karkoa'><div className='lk-hero-icon'> <FontAwesomeIcon className='icon' icon={faGithub} /></div></NavLink>
    </div>
    </div>
 
    </div>
    </>
  )
}
