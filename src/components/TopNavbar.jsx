import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class TopNavbar extends Component {
  render() {
    return (
    	<Navbar inverse collapseOnSelect fixedTop>
    	  <Navbar.Header>
    	    <Navbar.Brand>
    	      <a href="#HOME"><img src="./src/images/logo_white.png" width="auto" height="100%" /></a>
    	    </Navbar.Brand>
    	    <Navbar.Toggle />
    	  </Navbar.Header>
    	  <Navbar.Collapse>
    	    <Nav pullRight>
    	      <NavItem eventKey={1} href="#HOME">HOME</NavItem>
    	      <NavItem eventKey={2} href="#RESEARCH">RESEARCH</NavItem>
    	      <NavItem eventKey={3} href="#TEAM">TEAM</NavItem>
    	      <NavItem eventKey={5} href="#COLUMN">COLUMN</NavItem>
    	      <NavItem eventKey={6} href="#CONTACT">CONTACT</NavItem>
    	    </Nav>
    	  </Navbar.Collapse>
    	</Navbar>
    );
  }
}
