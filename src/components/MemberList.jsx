import React from 'react';
import Member from './Member';

const MemberList = () => {
  const memberInfos = [
    {
      imageUrl: "/src/images/team/dylee.png",
      name: "Do yeop Lee",
      description: "PhD Candidate. Kakao Brain",
    },
    {
      imageUrl: "/src/images/team/hjpark.jpg",
      name: "Hyun Jae Park",
      description: "DApp Developer @ Penta Security Systems"
    },
    {
      imageUrl: "/src/images/team/kjlee.jpg",
      name: "Kyung June Lee",
      description: "PhD Candidate, Hardware AI Chip, Co-founder of Hozaebox"
    },
    {
      imageUrl: "/src/images/team/gyjoo.png",
      name: "Ki Young Ju",
      description: "Founder of Planet.B Product Manager at theloop",
      linkedin: "https://www.linkedin.com/in/ki-young-ju/"
    },
    {
      imageUrl: "/src/images/team/hjjoo.jpg",
      name: "Hyo Jin Ju",
      description: "Electriacl Eng. Undergrad"
    },
    {
      imageUrl: "/src/images/team/bjson.jpg",
      name: "Beom Jun Sohn",
      description: "Creative IT Eng. Undergrad"
    },
    {
      imageUrl: "/src/images/team/hjhjpark.jpg",
      name: "Hyung Jun Park",
      description: "MS Candidate, Computer Science @ POSTECH"
    },
    {
      imageUrl: "/src/images/team/jwpark.jpg",
      name: "Jin Woo Park",
      description: "Product Manager @ Chain Partners"
    },
    {
      imageUrl: "/src/images/team/jycho.jpg",
      name: "Jae Yeon Cho",
      description: "ICO Project Manager @ Penta Security Systems"
    },
    {
      imageUrl: "/src/images/team/tyjeong.png",
      name: "Tae Yeol Jeong",
      description: "PhD, CS POSTECH, Fog Computing & Distributed Storage Systems"
    },
    {
      imageUrl: "/src/images/team/bkjang.jpg",
      name: "Byung Kook Jang",
      description: "Industrial & Management Eng. Crypto Millianaire"
    },
    {
      imageUrl: "/src/images/team/bjkim.jpg",
      name: "Byung Jun Kim",
      description: "PhD, EE POSTECH, Hardware AI Chip, Co-founder of Hozaebox"
    },
    {
      imageUrl: "/src/images/team/kwjoo.jpg",
      name: "Kyung Woon Ju",
      description: "Industrial & Management Eng., Undergrad"
    }
  ]

  const memberList = memberInfos.map(memberInfo => {
    return(
      <Member
      imageUrl={memberInfo.imageUrl}
      name={memberInfo.name}
      description={memberInfo.description}
      linkedin={memberInfo.linkedin}/>
    );
  });

  return (
    <div>
      {memberList}
    </div>
  );
};

export default MemberList;
