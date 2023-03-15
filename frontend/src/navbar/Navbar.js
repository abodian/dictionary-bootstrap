import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
require('./Navbar.css')

export function SiteNavbar({onThesaurusClick, onDictionaryClick}) {
  return (
    <Navbar bg="dark" variant="dark" className='site-navbar'>
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={onDictionaryClick}>Dictionary</Nav.Link>
          <Nav.Link onClick={onThesaurusClick}>Thesaurus</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
