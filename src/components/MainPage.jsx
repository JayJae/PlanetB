import React, { Component } from 'react';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import { Jumbotron, Button } from 'react-bootstrap';

import PlanetBMain from './PlanetBMain';
import PlanetBResearch from './PlanetBResearch';

import MemberList from './MemberList';

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
            <Section color="#333">
              <h1 className="page-name">Team Member</h1>
              <MemberList />
            </Section>
            <Section color="#0000FF">
  		Page 4
            </Section>
            <Section color="#00FF00">
  		Page 5
            </Section>
          </SectionsContainer>
    );
  }
}

export default MainPage;
