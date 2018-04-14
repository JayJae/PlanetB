import React, { Component } from 'react';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import { Jumbotron, Button } from 'react-bootstrap';

export default class App extends Component {
  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['home', 'aboutUs', 'teamMember', 'contactUs'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        true,
      sectionPaddingTop:    '6em',
      sectionPaddingBottom: '0px',
      arrowNavigation:      true,
      scrollOverflowReset:  true,
      responsiveSlides:     true
    };

    return (
      <div>
        <Header>
          <span className="menu-brand">
            <a href="#home">Planet B</a>
          </span>
          <span className="menu-items">
            <a href="#home">Home</a>
            <a href="#aboutUs">About Us</a>
            <a href="#teamMember">Team Member</a>
            <a href="#contactUs">Contact Us</a>
          </span>
        </Header>

        <SectionsContainer {...options}>
          <Section color="#FFF">
            <Jumbotron bsClass="jumbotron-custom">
              <h1>PlanetB</h1>
              <p>
                Planet Blockchain, the Postech Blockchain Group
              </p>
              <p>
                <Button bsStyle="primary" align="center">Learn more</Button>
              </p>
            </Jumbotron>
          </Section>
          <Section color="#123">Page 2</Section>
          <Section color="#456">Page 3</Section>
          <Section color="#456">Page 4</Section>
        </SectionsContainer>
      </div>
    );
  }
}
