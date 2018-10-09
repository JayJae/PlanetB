import React, { Component } from 'react';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import { Jumbotron, Button } from 'react-bootstrap';

{/* import PlanetBMain from './PlanetBMain'; */}
import PlanetBAbout from './PlanetBAbout';
import PlanetBResearch from './PlanetBResearch';
import MemberList from './MemberList';
import AdvisorList from './AdvisorList';
import PlanetBActivity from './PlanetBActivity';
import ContactUs from './ContactUs';

class MainPage extends Component {
  render() {
    let options = {
      sectionClassName:     'section fp-auto-height-responsive',
      anchors:              ['HOME', 'MEMBERS', 'ADVISORS', 'ACTIVITY', 'CONTACT'],
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
            <Section color="#f5f7fb">
              <PlanetBAbout />
            </Section>
            <Section color="#041e2f">
              <div className="member">
                <MemberList />
              </div>
            </Section>
            <Section color="#041e2f">
              <AdvisorList />
            </Section>
            <Section color="#041e2f">
              <PlanetBActivity />
            </Section>
            <Section color="#101010">
              <ContactUs />
            </Section>
          </SectionsContainer>

    );
  }
}

export default MainPage;
