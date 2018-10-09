import React from 'react';
import { Grid, Row, Col, Clearfix, ListGroup, ListGroupItem } from 'react-bootstrap';

const PlanetBAbout = () => {
  return (
      <div className="planetb-about">
        <div className="container-about">
          <Grid>
            <Row className="show-grid">
              <Col sm={12} md={8}>
                <div className="gutter-top">
              <h1 className="maintitle-no-padding">We build decentralized applications</h1>
                <div className="maintitle-no-padding-paragraph">Planet B is a student-run organization at POSTECH dedicated to develop decentralized applications, middlewares, and private blockchain projects.
                  We are working with industry leaders and academics to design and developing blockchain solutions that create intrinsic values of decentralization.
                  <div className="btnwrapper">
                    <div className="button-4">
                        <div className="eff-4"></div>
                        <a target="_blank" href="https://goo.gl/forms/jiAcIkDW8HoatmZi2"> APPLY</a>
                    </div>
                  </div>
                </div>
                </div>
              </Col>
              <Col sm={12} md={4} className="gutter-top">
              <p className="research-category-box research-glyphicon">
                <span className="glyphicon glyphicon-check"></span> DApp for Wide-spread Use
              </p>
              <p className="research-category-box research-glyphicon">
                <span className="glyphicon glyphicon-phone"></span> Middlewares
              </p>
              <p className="research-category-box research-glyphicon">
                <span className="glyphicon glyphicon-bitcoin"></span> Crypto Wallets / Exchanges
              </p>
              <p className="research-category-box research-glyphicon">
                <span className="glyphicon glyphicon-link"></span> Private Blockchain
              </p>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
  );
};

export default PlanetBAbout;
