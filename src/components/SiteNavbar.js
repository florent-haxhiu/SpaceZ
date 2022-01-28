import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav, {} from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import earthIcon from './../images/earth-icon.png'

const SiteNavbar = () => (
  <Navbar expand="sm" bg="light">
    <Container>
      <Navbar.Brand>
        <Link to="/">
          <img className='home-icon' src={earthIcon} alt="image of earth" />
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className='justify-content-end'> 
        <Nav.Item>
          <Link to="/bodiesindex">All Bodies.</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/planets">All Planets.</Link>
        </Nav.Item>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default SiteNavbar