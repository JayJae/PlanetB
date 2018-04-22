import React from 'react';
import { Grid, Row, Col, Clearfix, ListGroup, ListGroupItem } from 'react-bootstrap';

const PlanetBAbout = () => {
  return (
    <div className="planetb-about">
      <Grid>
        <Row className="show-grid">
          <Col sm={12} md={9}>
          <h1 className="maintitle-no-padding">Blockchain at POSTECH</h1>
            <div className="maintitle-no-padding-paragraph">Planet.B is a student-run organization at POSTECH dedicated to doing blockchain research with consensus algorithms, decentralized applications, token economics and blockchain network. We are working with industry leaders and academics to design and develop blockchain solutions that create intrinsic values of decentralization. </div>
          </Col>
          <Col sm={12} md={3}>
          <p className="research-category-box research-glyphicon">
            <span className="glyphicon glyphicon-check"> Consensus Algorithm</span>
          </p>
          <p className="research-category-box research-glyphicon">
            <span className="glyphicon glyphicon-phone"> Decentralized Application</span>
          </p>
          <p className="research-category-box research-glyphicon">
            <span className="glyphicon glyphicon-bitcoin"> Token Economics</span>
          </p>
          <p className="research-category-box research-glyphicon">
            <span className="glyphicon glyphicon-link"> Blockchain Network</span>
          </p>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default PlanetBAbout;
