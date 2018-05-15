import React from 'react';
import { Grid, Row, Col, Clearfix, ListGroup, ListGroupItem } from 'react-bootstrap';

const AdvisorList = () => {
  return (
    <div>
    	  <Grid>
          <div className="maintitle-dark-leftsided-header"><span># Advisors</span></div>
          <div className="maintitle-dark-leftsided-paragraph">Advisors are well-known pioneers in the blockchain industry, accelearting our community by helping us to make research topics more practical and important.</div>

            <div className = "advisor-category-box">
              <Row>
              <Col xs={12} sm={4} md={3} mdOffset={1}>
                <img src="/src/images/advisors/profile_simon.jpg"></img>
              </Col>

                <Col xs={12} sm={6}>
                  <br/>
                  <h3> Simon Seojoon Kim </h3>
                  <br/>
                  <p>CEO at #HASHED</p>
                  <br/>
                  Simon Seojoon Kim is CEO and Partner of Hashed, a leading crypto fund based in South Korea. He is a Blockchain evangelist and organizer of Hashed Lounge, a premier Blockchain Seoul meetup community. Prior to Hashed, Simon was a serial entrepreneur and has co-founded numerous companies. He served as Chief Product Officer at Knowre, an ed-tech startup that was named one of World's Top 10 Most Innovative Companies in Education by Fast Company.
                  <br/>
                  </Col>
              </Row>
            </div>
    	  </Grid>
      </div>
  );
};

export default AdvisorList;
