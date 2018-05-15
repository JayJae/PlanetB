import React, { Component } from 'react';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import { Jumbotron, Button } from 'react-bootstrap';

import PlanetBMain from './PlanetBMain';
import PlanetBAbout from './PlanetBAbout';
import PlanetBResearch from './PlanetBResearch';
import MemberList from './MemberList';
import AdvisorList from './AdvisorList';
import PlanetBColumn from './PlanetBColumn';
import ContactUs from './ContactUs';

class MainPage extends Component {
  render() {
    let options = {
      sectionClassName:     'section fp-auto-height-responsive',
      anchors:              ['HOME', 'ABOUT', 'RESEARCH', 'TEAM', 'ADVISORS', 'COLUMN', 'CONTACT'],
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
            <Section color="#f5f7fb">
              <PlanetBAbout />
            </Section>
            <Section color="#041e2f">
              <PlanetBResearch />
            </Section>
            <Section color="#041e2f">
              <div className="member">
                <h2 className="maintitle-dark">TEAM</h2>
                <MemberList />
              </div>
            </Section>
            <Section color="#041e2f">
              <AdvisorList />
            </Section>
            <Section color="#041e2f">
              <PlanetBColumn />
            </Section>
            <Section color="#101010">
              <ContactUs />
            </Section>
          </SectionsContainer>

    );
  }
}

export default MainPage;
