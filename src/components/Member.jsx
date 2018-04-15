import React from 'react';

const Member = ({imageUrl, name, description}) => {
  return (
    <div className="profile col-md-4">
      <img
        src={imageUrl}
        className="profile-img col-md-4"
      />
    <div className="profile-text col-md-8">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Member;
