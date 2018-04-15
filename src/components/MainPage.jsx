import React, { Component } from 'react';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import { Jumbotron, Button } from 'react-bootstrap';
import PlanetBMain from './PlanetBMain';
import MemberList from './MemberList';

class MainPage extends Component {
  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['ABOUT', 'RESEARCH', 'MEMBER', 'EVENT', 'CONTACT'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        true,
      sectionPaddingTop:    '40px',
      sectionPaddingBottom: '0px',
      arrowNavigation:      true,
      scrollOverflowReset:  true,
      responsiveSlides:     true
    };
    return (
          <SectionsContainer {...options}>
            <Section color="#0E2331">
              <PlanetBMain />
            </Section>
            <Section color="#222">
              <h1 className="page-name">Team Member</h1>
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
