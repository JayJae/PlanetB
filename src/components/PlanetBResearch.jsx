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
                    <ListGroupItem header="Project Voyager">
                    <Row>
                    <Col xs="8">
      		           Monitoring and detecting suspicious patterns in blockchain networks.
                     </Col>
                     <Col xs="4">
                     Kyung Min Kim, Ji Sung Yoon, Duk Sang Lee
                     </Col>
                     </Row>
      		          </ListGroupItem>
      	      </a>

                  <ListGroupItem  header="Blockchain Analytics for Cryptocurrency Investments">
                  <Row>
                  <Col xs="8">
                  Helping newcomers overcome their lack of experience and education in crypto ecosystem, using blockchain analytics.
                   </Col>
                   <Col xs="4">
                   Kyung Chan Ko, Tae Yeol Jeong
                   </Col>
                   </Row>
                  </ListGroupItem>


              <a href="https://docs.google.com/document/d/17Ohedel5iMaULc2K-t5MFADWbFoqqFM4j68Ot__BLKw/edit#heading=h.gr5450k0x1yv" target="_blank">
                  <ListGroupItem  header="A Case Study on Industrial Availability and Direction of Blockchain - Automobile IT System">
                  <Row>
                  <Col xs="8">
                  Use case studies about application of existing/future automotive IT system of blockchain.
                   </Col>
                   <Col xs="4">
                   Jae Yeon Cho, Jin Woo Park
                   </Col>
                   </Row>
                  </ListGroupItem>
              </a>

              <a href="https://docs.google.com/document/d/1zbot3ZpsX1ZKedkhm4yCG982F8EggCjF6Xle8BV0jwg/edit?usp=sharing" target="_blank">
                  <ListGroupItem  header="Designing A Decentralized Community using Blockchain">
                  <Row>
                  <Col xs="8">
                  This study will devise a scalable DAO system with more opened, global token incentivization.
                   </Col>
                   <Col xs="4">
                   Hyo Jin Ju, Hyun Sung Jeon
                   </Col>
                   </Row>
                  </ListGroupItem>
              </a>

              <a href="https://docs.google.com/document/d/1EOuQaIxWuJuOrihqT0rWmGbzOyMCTpJ3PPvcLB-Np7Y/edit" target="_blank">
                  <ListGroupItem  header="Robustness Identification against Malicious Attacks on Blockchain using Agent-based Model Simulation">
                  <Row>
                  <Col xs="8">
                  In this research, we try to uncover the effects of malicious nodes on blockchain using ABM (Agent-based Model).
                   </Col>
                   <Col xs="4">
                   Do Yup Lee, Ji Sung Yoon
                   </Col>
                   </Row>
                  </ListGroupItem>
              </a>

              <a href="https://docs.google.com/document/u/2/d/15WbaRrWELD0-avhPmx6pIA92B_GwhJMzlaV24-bVCQE/edit" target="_blank">
                  <ListGroupItem  header="Finding the weakest security link to manage cryptocurrencies">
                  <Row>
                  <Col xs="8">
                  This study will figure out what would be the weakest link in the viewpoint of end-to-end security, and suggest various ways to solve cryptocurrency hacking problems.
                   </Col>
                   <Col xs="4">
                   Ki Young Ju, Byeong Kook Jang
                   </Col>
                   </Row>
                 </ListGroupItem>
              </a>

              <a href="https://docs.google.com/document/d/1dXCb8LuJyDGaV6-3tLKdddOpV_xW_7YnFPgScZ5kEfs/edit" target="_blank">
                   <ListGroupItem header="Realistic DAO Design">
                   <Row>
                   <Col xs="8">
                   Designing a realistic, applicable DAO system for every organizations.
                    </Col>
                    <Col xs="4">
                    Byeong Jun Kim, Byung Guk Jang, Hyo Jin Ju, Kyung June Lee, et al.
                    </Col>
                    </Row>
                   </ListGroupItem>
              </a>

	    </ListGroup>
          </Col>
    	  </Row>
    	</Grid>
    </div>
  );
};

export default PlanetBResearch;
