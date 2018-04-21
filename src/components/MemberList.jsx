import React from 'react';
import Member from './Member';

const MemberList = () => {
  const memberInfos = [
    {
      imageUrl: "/src/images/team/gyjoo.png",
      name: "Ki Young Ju",
      description: "Founder. Product Manager at theloop"
    },
    {
      imageUrl: "/src/images/team/dylee.png",
      name: "Do yeop Lee",
      description: "PhD Candidate. Kakao Brain"
    },
    {
      imageUrl: "/src/images/team/hjpark.png",
      name: "Hyun Jae Park",
      description: "DApp Developer @ Penta Security Systems"
    },
    {
      imageUrl: "",
      name: "Kyung June Lee",
      description: "PhD Candidate"
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
