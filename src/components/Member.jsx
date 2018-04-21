import React from 'react';

const Member = ({imageUrl, name, description}) => {
  return (
    <div className="profile col-md-3">
      <div className="thumb">
        <img src={imageUrl} className="profile-img">
          <div className="profile-text">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </img>
      </div>
    </div>
  );
};

export default Member;
