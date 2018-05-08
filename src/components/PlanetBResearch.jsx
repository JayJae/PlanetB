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


            <ListGroupItem  header="Blockchain Analytics for Cryptocurrency Investments; Kyung Chan Ko, Tae Yeol Jeong">
              Helping newcomers overcome their lack of experience and education in crypto ecosystem, using blockchain analytics.
            </ListGroupItem>


        <a href="https://docs.google.com/document/d/17Ohedel5iMaULc2K-t5MFADWbFoqqFM4j68Ot__BLKw/edit#heading=h.gr5450k0x1yv" target="_blank">
            <ListGroupItem  header="A Case Study on Industrial Availability and Direction of Blockchain #1. Automobile IT System; Jae Yeon Cho, Jin Woo Park">
              Use Case Study # 1: Application of existing / future automotive IT system of blockchain.
            </ListGroupItem>
        </a>

        <a href="https://docs.google.com/document/d/1zbot3ZpsX1ZKedkhm4yCG982F8EggCjF6Xle8BV0jwg/edit?usp=sharing" target="_blank">
            <ListGroupItem  header="Designing A Decentralized Community using Blockchain; Hyo Jin Ju, Hyun Sung Jeon">
              This study will devise a scalable DAO system with more opened, global token incentivization.
            </ListGroupItem>
        </a>

        <a href="https://docs.google.com/document/d/1EOuQaIxWuJuOrihqT0rWmGbzOyMCTpJ3PPvcLB-Np7Y/edit" target="_blank">
            <ListGroupItem  header="Robustness Identification against Malicious Attacks on Blockchain using Agent-based Model Simulation; Do Yup Lee, Ji Sung Yoon">
              In this research, we try to uncover the effects of malicious nodes on blockchain using ABM (Agent-based Model).
            </ListGroupItem>
        </a>

        <a href="https://docs.google.com/document/u/2/d/15WbaRrWELD0-avhPmx6pIA92B_GwhJMzlaV24-bVCQE/edit" target="_blank">
            <ListGroupItem  header="Finding the weakest security link to manage cryptocurrencies; Ki Young Ju, Byeong Kook Jang">
              This study will figure out what would be the weakest link in the viewpoint of end-to-end security, and suggest various ways to solve cryptocurrency hacking problems.
           </ListGroupItem>
        </a>

        <a href="https://docs.google.com/document/d/1dXCb8LuJyDGaV6-3tLKdddOpV_xW_7YnFPgScZ5kEfs/edit" target="_blank">
             <ListGroupItem header="Realistic DAO Design; Byeong Jun Kim, Byung Guk Jang, Hyo Jin Ju, Kyung June Lee, et al.">
               Designing a realistic, applicable DAO system for every organizations.
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
