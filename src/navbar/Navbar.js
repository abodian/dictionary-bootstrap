import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
require('./Navbar.css')

export function SiteNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
     <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#dictionary">Dictionary</Nav.Link>
          <Nav.Link href="#thesaurus">Thesaurus</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}