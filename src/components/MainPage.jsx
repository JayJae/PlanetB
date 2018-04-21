import React, { Component } from 'react';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import { Jumbotron, Button } from 'react-bootstrap';

import PlanetBMain from './PlanetBMain';
import PlanetBAbout from './PlanetBAbout';
import PlanetBResearch from './PlanetBResearch';
import MemberList from './MemberList';
import PlanetBNews from './PlanetBNews';
import ContactUs from './ContactUs';

class MainPage extends Component {
  render() {
    let options = {
      sectionClassName:     'section fp-auto-height-responsive',
      anchors:              ['HOME', 'ABOUT', 'RESEARCH', 'TEAM', 'NEWS', 'CONTACT'],
      fitToSection:         true,
      scrollBar:            true,
      autoScrolling:        false,
      verticalAlign:        true,
      sectionPaddingTop:    '0px',
      sectionPaddingBottom: '0px',
      responsiveAutoHeight: true,
      scrollOverflowReset: true
    };
    return (
          <SectionsContainer {...options}>
            <Section color="#0E2331" className="section-about">
              <PlanetBMain />
            </Section>
            <Section color="#EFEFEF">
              <PlanetBAbout />
            </Section>
            <Section color="#EFEFEF">
              <PlanetBResearch />
            </Section>
            <Section color="#041e2f">
              <h2 className="maintitle-dark">Researchers</h2>
              <MemberList />
              <div style={{height:'750'}}></div>
            </Section>
            <Section color="#041e2f">
              <PlanetBNews />
            </Section>
            <Section color="#555">
              <ContactUs />
            </Section>
          </SectionsContainer>
    );
  }
}

export default MainPage;
