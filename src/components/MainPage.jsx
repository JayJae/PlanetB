import React, { Component } from 'react';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import { Jumbotron, Button } from 'react-bootstrap';

import PlanetBMain from './PlanetBMain';
import PlanetBResearch from './PlanetBResearch';

import MemberList from './MemberList';
import ContactUs from './ContactUs';

class MainPage extends Component {
  render() {
    let options = {
      sectionClassName:     'section fp-auto-height-responsive',
      anchors:              ['ABOUT', 'RESEARCH', 'MEMBER', 'EVENT', 'CONTACT'],
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
              <PlanetBResearch />
            </Section>
            <Section color="#000000">
              <div style={{sectionPaddingBottom:'300'}}>
                <h2 className="page-name">Team</h2>
                <MemberList />
              </div>
            </Section>
            <Section color="#444">
  		        Page 4
            </Section>
            <Section color="#555">
              <ContactUs />
            </Section>
          </SectionsContainer>
    );
  }
}

export default MainPage;
