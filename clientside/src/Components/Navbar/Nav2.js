import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav2.css';
import Logo from '../Images/logo (1).png';

function Nav2() {
  const [isSticky, setIsSticky] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" className={`bg-body-tertiary ${isSticky ? 'sticky-top' : ''}`} expanded={expanded}>
      <Container fluid className="containerNav">
        <div className="brandIcon">
          <img src={Logo} alt="Logo" />
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" onClick={handleToggle} />
        <Navbar.Collapse id="navbarScroll" className="colapdiv">
          <Nav
            className="mx-auto my-9 my-lg-0"
            style={{ maxHeight: '275px', justifyContent: 'center', alignItems: 'center', fontStyle: 'normal', color: 'black', fontWeight: 'bold' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" onClick={handleLinkClick}>HOME</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" onClick={handleLinkClick}>ABOUT US</Nav.Link>
            <Nav.Link as={Link} to="/ourservice" onClick={handleLinkClick}>SERVICE</Nav.Link>
            <Nav.Link as={Link} to="/appointment" onClick={handleLinkClick}>APPOINTMENT</Nav.Link>
            <Nav.Link as={Link} to="/contactus" onClick={handleLinkClick}>CONTACT US</Nav.Link>
            <Nav.Link href="">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Button
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav2;
