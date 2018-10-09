import React from 'react';
import { Grid, Row, Col, Clearfix, ListGroup, ListGroupItem } from 'react-bootstrap';

const PlanetBActivity = () => {
  return (
    <div className="planetb-news">
      <h1 className="maintitle-dark">LATEST ACTIVITIES</h1>
      <div className="maintitle-dark-paragraph"><center>We build decentralized applications; it's what we do.</center></div>
  	  <Grid>
      	    <div style={{height:'50'}}></div>
  	    <Row className="show-grid">
  	      <Col sm={6} md={3}>
            <div className="news-category-box">
              <img src="/src/images/news/eosio.png"></img>
              <p>Participated in EOS Hacakthon HongKong 2018.</p>
              <div id="container">
                <div className="button-3">
                  <div className="eff-3"></div>
                    <a target="_blank" href="https://eoshackathon.io/events/hong-kong/#images-74"> See details</a>
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
              <img src="/src/images/news/coindesk.png"></img>
              <p>Interviewed Vitalik Buterin and participated as a translator.</p>
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
              <img src="/src/images/news/blackbird.png"></img>
              <p>One of the members got started a stealth startup.</p>
              <div id="container">
                <div className="button-3">
                  <div className="eff-3"></div>
                  <a target="_blank" href="http://teamblackbird.io/"> See details</a>
                  </div>
                </div>
              </div>
          </Col>
  	    </Row>
  	  </Grid>
      </div>
  );
};

export default PlanetBActivity;
