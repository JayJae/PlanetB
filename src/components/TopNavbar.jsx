import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class TopNavbar extends React.Component {
  render() {
    return (
	<Navbar inverse collapseOnSelect fixedTop>
	  <Navbar.Header>
	    <Navbar.Brand>
	      <a href="#Home"><img src="./src/images/logo_white.png" width="auto" height="100%" /></a>
	    </Navbar.Brand>
	    <Navbar.Toggle />
	  </Navbar.Header>
	  <Navbar.Collapse>
	    <Nav pullRight>
	      <NavItem eventKey={1} href="#">
		ABOUT
	      </NavItem>
	      <NavItem eventKey={2} href="#">
		RESEARCH
	      </NavItem>
	      <NavItem eventKey={3} href="#">
		MEMBER
	      </NavItem>
	      <NavItem eventKey={4} href="#">
		EVENT
	      </NavItem>
	      <NavItem eventKey={5} href="#">
		CONTACT
	      </NavItem>
	    </Nav>
	  </Navbar.Collapse>
	</Navbar>
    );
  }
}


export default TopNavbar;
