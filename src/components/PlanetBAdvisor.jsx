import React from 'react';
import { Grid, Row, Col, Clearfix, ListGroup, ListGroupItem } from 'react-bootstrap';

const PlanetBAdvisor = () => {
  return (
    <div>
      <h1 className="maintitle">ADVISORS</h1>
      <div className="maintitle-paragraph"><center>We write and submit an article to be published in a newspaper, Steemit, journal, etc.</center></div>
  	  <Grid>
      	    <div style={{height:'50'}}></div>
  	    <Row className="show-grid">
  	      <Col sm={6} md={3}>
            <div className="advisor-category-box">
              <img src="/src/images/advisors/profile_simon.jpg"></img>
              <h3> Simon Seojoon Kim </h3>
              <p>CEO at #HASHED</p>
              <div id="container">
                <div className="button-3">
                  <div className="eff-3"></div>
                  <a target="_blank" href="https://www.coindeskkorea.com/%EB%B9%84%ED%83%88%EB%A6%AD-%EB%8B%A8%EB%8F%85-%EC%9D%B8%ED%84%B0%EB%B7%B0-3%EC%84%B8%EB%8C%80-%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8-%EC%9D%B4%EB%8D%94%EB%A6%AC%EC%9B%80-%EB%AC%B4%EC%8B%9C-%EB%A7%90/"> See details</a>
                  </div>
                </div>
              </div>
  	      </Col>
  	      <Col sm={6} md={3}>
            <div className="news-category-box">
              <img src="/src/images/news/coindesk.png"></img>
              <p>Published a series of articles about our research with Coindesk Korea.</p>
              <div id="container">
                <div className="button-3">
                  <div className="eff-3"></div>
                  <a href="#COLUMN"> To Be Published</a>
                  </div>
                </div>
              </div>
  	      </Col>
          <Col sm={6} md={3}>
            <div className="news-category-box">
              <img src="/src/images/news/blockchain-news.png"></img>
              <p>Introduced about our vision and activities through Blockchain News.</p>
              <div id="container">
                <div className="button-3">
                  <div className="eff-3"></div>
                  <a target="_blank" href="http://www.blockchainnews.co.kr/news/view.php?idx=1043"> See details</a>
                  </div>
                </div>
              </div>
          </Col>
          <Col sm={6} md={3}>
            <div className="news-category-box">
              <img src="/src/images/news/steemit.png"></img>
              <p>Published articles about our achievements and research progress.</p>
              <div id="container">
                <div className="button-3">
                  <div className="eff-3"></div>
                  <a target="_blank" href="https://steemit.com/@blockchain.pos"> See details</a>
                  </div>
                </div>
              </div>
          </Col>
  	    </Row>
  	  </Grid>
      </div>
  );
};

export default PlanetBAdvisor;
