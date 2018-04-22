import React from 'react';
import Member from './Member';

const MemberList = () => {
  const memberInfos = [
    {
      imageUrl: "/src/images/team/gyjoo.png",
      name: "Ki Young Ju",
      description: "Founder of Planet.B, Product Manager @theloop",
      linkedin: "https://www.linkedin.com/in/ki-young-ju/"
    },
    {
      imageUrl: "/src/images/team/bkjang.png",
      name: "Byung Kook Jang",
      description: "Undergrad @POSTECH Industrial & Mgmt Eng. Token Economist, ICO Expert"
    },
    {
      imageUrl: "/src/images/team/jwpark.png",
      name: "Jin Woo Park",
      description: "Product Manager @Chain Partners"
    },
    {
      imageUrl: "/src/images/team/kjlee.png",
      name: "Kyung June Lee",
      description: "PhD Candidate @POSTECH, Hardware AI Chip, Co-founder of Hozaebox"
    },
    {
      imageUrl: "/src/images/team/hjpark.jpg",
      name: "Hyun Jae Park",
      description: "Developer @Penta Security Systems"
    },
    {
      imageUrl: "/src/images/team/bjkim.png",
      name: "Byung Jun Kim",
      description: "PhD Candidate @POSTECH EE, Hardware AI Chip, Co-founder of Hozaebox"
    },
    {
      imageUrl: "/src/images/team/hjjoo.png",
      name: "Hyo Jin Ju",
      description: "Electrical Eng. Undergrad @POSTECH"
    },
    {
      imageUrl: "/src/images/team/kmkim.png",
      name: "Kyung Min Kim",
      description: "PhD Candidate @POSTECH CS, Database"
    },
    {
      imageUrl: "/src/images/team/jsyoon.png",
      name: "Ji Sung Yoon",
      description: "PhD Candidate @POSTECH, Industrial & Management Eng."
    },
    {
      imageUrl: "/src/images/team/dylee.png",
      name: "Do yeop Lee",
      description: "PhD Candidate @POSTECH CITE, AI, Kakao Brain",
    },
    {
      imageUrl: "/src/images/team/hsjeon.png",
      name: "Hyun Seong Jeon",
      description: "Computer Science Undergrad @POSTECH"
    },
    {
      imageUrl: "/src/images/team/jycho.jpg",
      name: "Jae Yeon Cho",
      description: "ICO Project Manager @Penta Security Systems"
    },
    {
      imageUrl: "/src/images/team/kwjoo.png",
      name: "Kyung Woon Ju",
      description: "Undergrad @POSTECH Industrial & Management Eng."
    },
    {
      imageUrl: "/src/images/team/tyjeong.png",
      name: "Tae Yeol Jeong",
      description: "PhD @POSTECH CS, Fog Computing & Distributed Storage Systems"
    },
    {
      imageUrl: "/src/images/team/dhahn.png",
      name: "Dong Hoon Ahn",
      description: "Undergrad @POSTECH CITE. Researcher @Penta Security Systems"
    },
    {
      imageUrl: "/src/images/team/bjson.jpg",
      name: "Beom Jun Sohn",
      description: "Creative IT Eng. Undergrad @POSTECH"
    },
    {
      imageUrl: "/src/images/team/hjhjpark.png",
      name: "Hyung Jun Park",
      description: "MS Candidate, Computer Science @ POSTECH"
    },
    {
      imageUrl: "/src/images/team/kcko.png",
      name: "Kyung Chan Ko",
      description: "PhD Candidate @POSTECH, Distributed Computing"
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
