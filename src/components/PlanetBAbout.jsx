import React from 'react';
import { Grid, Row, Col, Clearfix, ListGroup, ListGroupItem } from 'react-bootstrap';

const PlanetBAbout = () => {
  return (
      <div className="planetb-about">
        <div className="container-about">
          <Grid>
            <Row className="show-grid">
              <Col sm={12} md={8}>
              <h1 className="maintitle-no-padding">Blockchain at POSTECH</h1>
                <div className="maintitle-no-padding-paragraph">Planet.B is a student-run organization at POSTECH dedicated to doing blockchain research with consensus algorithms, decentralized applications, token economics and blockchain network. We are working with industry leaders and academics to design and develop blockchain solutions that create intrinsic values of decentralization. </div>
              </Col>
              <Col sm={12} md={4}>
              <p className="research-category-box research-glyphicon">
                <span className="glyphicon glyphicon-check"></span> Consensus Algorithm
              </p>
              <p className="research-category-box research-glyphicon">
                <span className="glyphicon glyphicon-phone"></span> Decentralized Application
              </p>
              <p className="research-category-box research-glyphicon">
                <span className="glyphicon glyphicon-bitcoin"></span> Token Economics
              </p>
              <p className="research-category-box research-glyphicon">
                <span className="glyphicon glyphicon-link"></span> Blockchain Network
              </p>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
  );
};

export default PlanetBAbout;
