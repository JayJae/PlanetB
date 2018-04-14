import React, { Component } from 'react';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';

export default class App extends Component {
  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['home', 'aboutUs', 'teamMember', 'contactUs'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        false,
      sectionPaddingTop:    '50px',
      sectionPaddingBottom: '50px',
      arrowNavigation:      true,
      offsetSections:       false,
    };

    return (
      <div>
        <Header>
          <a href="#home">Planet B</a>
          <a href="#aboutUs">About Us</a>
          <a href="#teamMember">Team Member</a>
          <a href="#contactUs">Contact Us</a>
        </Header>

        <SectionsContainer {...options}>
          <Section color="#FFF">Page 1</Section>
          <Section color="#123">Page 2</Section>
          <Section color="#456">Page 3</Section>
          <Section color="#456">Page 4</Section>
        </SectionsContainer>
      </div>
    );
  }
}
