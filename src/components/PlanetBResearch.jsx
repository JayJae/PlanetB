import React from 'react';
import { Grid, Row, Col, Clearfix, ListGroup, ListGroupItem } from 'react-bootstrap';

const PlanetBResearch = () => {
  return (
    <div className="planetb-research">
      <h1 className="maintitle">Interest</h1>
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
      <hr />
      <h1 className="maintitle">Ongoing Research</h1>
    	<Grid>
    	  <Row className="show-grid">
          <Col sm={12} md={12}>
    		    <ListGroup>
        		  <ListGroupItem header="Graph based Transaction Analysis">This research study about graph based transaction analysis.</ListGroupItem>
        		  <ListGroupItem header="How to switch DPoS system to decentralized system">This research study about How to switch DPoS system todecentralized system.</ListGroupItem>
        		  <ListGroupItem header="Application in future vehicle system">This research study about Application in future vehicle system.</ListGroupItem>
        		  <ListGroupItem header="Graph based Transaction Analysis">This research study about graph based transaction analysis.</ListGroupItem>
        		  <ListGroupItem header="How to switch DPoS system to decentralized system">This research study about How to switch DPoS system todecentralized system.</ListGroupItem>
        		</ListGroup>
          </Col>
    	  </Row>
    	</Grid>
    </div>
  );
};

export default PlanetBResearch;
