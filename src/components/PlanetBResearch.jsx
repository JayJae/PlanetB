import React from 'react';
import { Grid, Row, Col, Clearfix, ListGroup, ListGroupItem, Badge } from 'react-bootstrap';

const PlanetBResearch = () => {
  return (
    <div className="planetb-research">
      <h1 className="maintitle-dark">RESEARCH</h1>
      <div className="maintitle-dark-paragraph">
	We contribute to the cryptocurrency ecosystem ourselves by suggesting new token economy models and developing open-source projects.
      </div>
    	<Grid>
    	  <Row className="show-grid">
          <Col sm={12} md={12}>
    	    <ListGroup>
              <a href="https://docs.google.com/document/d/1Pxoalb4AgSzI3gy2MVfklJ7_s8cmzyZRFOcj1UNWqcQ/edit" target="_blank">
                <ListGroupItem header="Project Voyager; Kyung Min Kim, Ji Sung Yoon, Duk Sang Lee">
		  Monitoring and detecting suspicious patterns in blockchain networks.
		</ListGroupItem>
	      </a>
              <a href="https://docs.google.com/document/d/1dXCb8LuJyDGaV6-3tLKdddOpV_xW_7YnFPgScZ5kEfs/edit" target="_blank">
        	<ListGroupItem header="Realistic DAO Design; Byeong Jun Kim, Byung Guk Jang, Hyo Jin Ju, Kyung June Lee, et al.">
		  Designing a realistic, applicable DAO system for every organizations.
		</ListGroupItem>
	      </a>
              <ListGroupItem  header="Getting Decentralized for DPOS; Hyun Jae Park">
		Conceiving more decentralized DPOS model.
	      </ListGroupItem>
              <ListGroupItem  header="Inventing Decentralization Index; Kyeong June Lee">
		What would be the index determining how decentralized?
	      </ListGroupItem>
              <ListGroupItem  header="Crypto-philantrophy with DPOS; Jin Woo Park">
		Practical system to operate NGOs and manage donation funds.
	      </ListGroupItem>
              <ListGroupItem  header="Optimizing Consensus Algorithm with Game Theory and Reinforcement Learning; Hyung Jun Park">
		Game theory and reinforcement learning could be used for making optimal decisions among nodes.
	      </ListGroupItem>
              <ListGroupItem  header="Standard Units for Blockchain Industries; Min Jae Kim">
		Suggesting economical units for blockchain industries in market perspectives.
	      </ListGroupItem>
              <ListGroupItem  header="Specifying Security Token Systems; Ki Young Ju">
		It's very important to develop security token systems to popularize blockchain technology.
	      </ListGroupItem>
	    </ListGroup>
          </Col>
    	  </Row>
    	</Grid>
    </div>
  );
};

export default PlanetBResearch;
