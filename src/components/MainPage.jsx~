import React, { Component } from 'react';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import { Jumbotron, Button } from 'react-bootstrap';

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

  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles-js config loaded');
  });

  return (
        <SectionsContainer {...options}>
          <Section color="#0E2331">
		Page 1
          </Section>
          <Section color="#FF0000">
		Page 2
          </Section>
          <Section color="#00FF00">
		Page 3
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
