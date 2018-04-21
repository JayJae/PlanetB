import React, { Component } from 'react';
import { Button, Row, Col, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

const NAME = "name";
const EMAIL = "email";
const SUBJECT = "subject";

export default class ContactUs extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
      subject: ''
    };
  }

  handleChange(e, type) {
    switch(type) {
      case NAME:
        this.setState({ name: e.target.value });
        break;
      case EMAIL:
        this.setState({ email: e.target.value });
        break;
      case SUBJECT:
        this.setState({ subject: e.target.value });
        break;
    }
  }

  getValidationState(type) {
    switch(type) {
      case NAME:
        const name = this.state.name;

        if (name.length > 0 && name.length < 3) return 'error';
        else if (name.length >=3) return 'success';
        return null;
      case EMAIL:
        const email = this.state.email;
        if (email.length > 0) {
          if(email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) return 'success';
          else return 'error';
        }
        return null;
      case SUBJECT:
        const subject = this.state.subject;

        if (subject.length > 0 && subject.length < 20) return 'error';
        else if (subject.length >= 20) return 'success';
        return null;
    }
    return null;
  }

  render() {
    return (
      <form className="contact-form">
        <Row>
          <Col md={3} xs={0} />
          <Col md={3} xs={12}>
            <FormGroup
              validationState={this.getValidationState(NAME)}
              bsSize="md">
              <FormControl
                type="text"
                value={this.state.name}
                placeholder="Enter name"
                onChange={(e, type) => this.handleChange(e, NAME)}
              />
              <FormControl.Feedback />
            </FormGroup>
          </Col>
          <Col md={3} xs={12}>
            <FormGroup
              validationState={this.getValidationState(EMAIL)}
              bsSize="md">
              <FormControl
                type="text"
                value={this.state.email}
                placeholder="Enter email"
                onChange={(e, type) => this.handleChange(e, EMAIL)}
              />
              <FormControl.Feedback />
            </FormGroup>
          </Col>
          <Col md={3} xs={0} />
        </Row>
        <Row>
          <Col md={3} xs={0} />
          <Col md={6} xs={12}>
            <FormGroup
              validationState={this.getValidationState(SUBJECT)}>
              <FormControl
                type="text"
                componentClass="textarea"
                style={{ height: "20rem" }}
                value={this.state.subject}
                placeholder="Enter subject"
                onChange={(e, type) => this.handleChange(e, SUBJECT)}
              />
              <FormControl.Feedback />
            </FormGroup>
          </Col>
          <Col md={3} xs={0} />
        </Row>
        <Row>
          <Col md={3} xs={0} />
          <Col md={6} xs={12}>
            <Button
              type="submit"
              bsStyle="primary"
              bsSize="large"
              style={{width:"100%"}}
              >
              Send Email
            </Button>
          </Col>
          <Col md={3} xs={0} />
        </Row>
      </form>

    )

  }
};
