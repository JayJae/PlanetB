import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

const Member = ({imageUrl, name, description, linkedin}) => {
  return (
    <div className="profile col-xs-6 col-sm-3 col-md-2 col-lg-2">
      <div className="thumb">
          <img src={imageUrl} className="profile-img">
              <div className="profile-text">
                <h3> {name}</h3>
                <p>{description}</p>
              </div>
          </img>
      </div>
    </div>
  );
};

export default Member;
