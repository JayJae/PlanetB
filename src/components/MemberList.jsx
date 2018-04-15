import React from 'react';
import Member from './Member';

const MemberList = () => {
  const memberInfos = [
    {
      imageUrl: "https://pbs.twimg.com/profile_images/548619278333652993/wr4d4F0X_400x400.jpeg",
      name: "오징어",
      description: "나는 오징어다"
    },
    {
      imageUrl: "https://pbs.twimg.com/profile_images/548619278333652993/wr4d4F0X_400x400.jpeg",
      name: "오징어",
      description: "나는 오징어다"
    },
    {
      imageUrl: "https://pbs.twimg.com/profile_images/548619278333652993/wr4d4F0X_400x400.jpeg",
      name: "오징어",
      description: "나는 오징어다"
    },
    {
      imageUrl: "https://pbs.twimg.com/profile_images/548619278333652993/wr4d4F0X_400x400.jpeg",
      name: "오징어",
      description: "나는 오징어다"
    },
    {
      imageUrl: "https://pbs.twimg.com/profile_images/548619278333652993/wr4d4F0X_400x400.jpeg",
      name: "오징어",
      description: "나는 오징어다"
    },
    {
      imageUrl: "https://pbs.twimg.com/profile_images/548619278333652993/wr4d4F0X_400x400.jpeg",
      name: "오징어",
      description: "나는 오징어다"
    },
    {
      imageUrl: "https://pbs.twimg.com/profile_images/548619278333652993/wr4d4F0X_400x400.jpeg",
      name: "오징어",
      description: "나는 오징어다"
    },
    {
      imageUrl: "https://pbs.twimg.com/profile_images/548619278333652993/wr4d4F0X_400x400.jpeg",
      name: "오징어",
      description: "나는 오징어다"
    },
    {
      imageUrl: "https://pbs.twimg.com/profile_images/548619278333652993/wr4d4F0X_400x400.jpeg",
      name: "오징어",
      description: "나는 오징어다"
    }
  ]

  const memberList = memberInfos.map(memberInfo => {
    return(
      <Member
      imageUrl={memberInfo.imageUrl}
      name={memberInfo.name}
      description={memberInfo.description} />
    );
  });

  return (
    <div>
      {memberList}
    </div>
  );
};

export default MemberList;
