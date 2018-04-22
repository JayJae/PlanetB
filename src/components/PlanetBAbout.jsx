import React from 'react';
import { Grid, Row, Col, Clearfix, ListGroup, ListGroupItem } from 'react-bootstrap';

const PlanetBAbout = () => {
  return (
    <div className="planetb-about">
      <h1 className="maintitle">WHAT WE DO</h1>
        <div className="maintitle-paragraph">Planet.B is a student-run organization at POSTECH dedicated to doing blockchain research with consensus algorithms, DApp and cryptoeconomics.</div>
      <Grid>
  	    <Row className="show-grid">
  	      <Col sm={6} md={3}>
            <div className="research-category-box">
          		<p className="research-glyphicon">
                <span className="glyphicon glyphicon-link"></span>
              </p>
          		<p className="research-category">Blockchain Network</p>
            </div>
  	      </Col>
  	      <Col sm={6} md={3}>
        		<p className="research-category-box research-glyphicon">
              <span className="glyphicon glyphicon-check"></span>
            </p>
        		<p className="research-category">Consensus Algorithm</p>
  	      </Col>
  	      <Col sm={6} md={3}>
        		<p className="research-category-box research-glyphicon">
              <span className="glyphicon glyphicon-phone"></span>
            </p>
        		<p className="research-category">Decentralized Application</p>
  	      </Col>
  	      <Col sm={6} md={3}>
  		        <p className="research-category-box research-glyphicon">
                <span className="glyphicon glyphicon-bitcoin"></span>
              </p>
  		        <p className="research-category">Token Economics</p>
  	      </Col>
  	    </Row>
  	  </Grid>
    </div>
  );
};

export default PlanetBAbout;
