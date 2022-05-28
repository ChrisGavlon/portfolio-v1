import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';

import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand id="navbarBrand">Christopher Aguirre</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="me-auto">
                <Nav.Link id="about" as={NavLink} to="/" >About</Nav.Link>
                <Nav.Link id="projects" as={NavLink} to="projects" className="navBttn">Projects</Nav.Link>
                <Nav.Link id="contact" as={NavLink} to="contact" className="navBttn">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      <br/>
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" elements={<h1 id="errorURL">Error 404 Not Found</h1>} />
      </Routes>

    </div>
  );
}

export default App;
