import React from 'react';
import Member from './Member';

const MemberList = () => {
  const memberInfos = [
    {
      imageUrl: "/src/images/team/gyjoo.png",
      name: "Ki Young Ju",
      description: "Undergrad @POSTECH IME, Founder of Planet.B, Product Manager @theloop",
      linkedin: "https://www.linkedin.com/in/ki-young-ju/"
    },
    {
      imageUrl: "/src/images/team/bkjang.png",
      name: "Byeong Guk Jang",
      description: "Undergrad @POSTECH IME, Token Economist, ICO Expert"
    },
    {
      imageUrl: "/src/images/team/jwpark.png",
      name: "Jin Woo Park",
      description: "Undergrad @POSTECH MSE, Product Manager @Chain Partners"
    },
    {
      imageUrl: "/src/images/team/kjlee.png",
      name: "Kyung June Lee",
      description: "PhD Candidate @POSTECH EE, Hardware AI Chip, Co-founder of Hozaebox"
    },
    {
      imageUrl: "/src/images/team/hjpark.jpg",
      name: "Hyun Jae Park",
      description: "Undergrad @POSTECH IME, Full Stack Developer @Penta Security Systems"
    },
    {
      imageUrl: "/src/images/team/bjkim.png",
      name: "Byung Jun Kim",
      description: "PhD Candidate @POSTECH EE, Hardware AI Chip, Co-founder of Hozaebox"
    },
    {
      imageUrl: "/src/images/team/hjjoo.png",
      name: "Hyo Jin Ju",
      description: "Undergrad @POSTECH EE, Member of blockchain study group"
    },
    {
      imageUrl: "/src/images/team/kmkim.png",
      name: "Kyung Min Kim",
      description: "PhD Candidate @POSTECH CS, specalized in database, Full Stack Developer"
    },
    {
      imageUrl: "/src/images/team/jsyoon.png",
      name: "Ji Sung Yoon",
      description: "PhD Candidate @POSTECH IME, specalized in complex system"
    },
    {
      imageUrl: "/src/images/team/dylee.png",
      name: "Do Yeop Lee",
      description: "PhD Candidate @POSTECH CITE, AI, Kakao Brain",
    },
    {
      imageUrl: "/src/images/team/hsjeon.png",
      name: "Hyun Seong Jeon",
      description: "Undergrad @POSTECH CS, Developer"
    },
    {
      imageUrl: "/src/images/team/jycho.jpg",
      name: "Jae Yeon Cho",
      description: "Undergrad @POSTECH CITE, Engineer @Penta Security Systems"
    },
    {
      imageUrl: "/src/images/team/kwjoo.png",
      name: "Kyung Woon Ju",
      description: "Undergrad @POSTECH IME, Developer @Penta Security Systems, Researcher @Coinone"
    },
    {
      imageUrl: "/src/images/team/tyjeong.png",
      name: "Tae Yeol Jeong",
      description: "PhD @POSTECH CS, specialized in fog computing"
    },
    {
      imageUrl: "/src/images/team/dhahn.png",
      name: "Dong Hoon Ahn",
      description: "Undergrad @POSTECH CITE. Researcher @Penta Security Systems"
    },
    {
      imageUrl: "/src/images/team/bjson.jpg",
      name: "Beom Jun Sohn",
      description: "Undergrad @POSTECH CITE, DApp Research"
    },
    {
      imageUrl: "/src/images/team/hjhjpark.png",
      name: "Hyung Jun Park",
      description: "MS Candidate @POSTECH CS, Token Economist"
    },
    {
      imageUrl: "/src/images/team/kcko.png",
      name: "Kyung Chan Ko",
      description: "PhD Candidate @POSTECH CS, specialized in distributed computing"
    },
    {
      imageUrl: "/src/images/team/dslee.png",
      name: "Duk Sang Lee",
      description: "PhD Candidate @POSTECH IME, Researcher of POSTECH blockchain center"
    },
    {
      imageUrl: "/src/images/team/mjkim.png",
      name: "Min Jae Kim",
      description: "Undergrad @POSTECH CS, Cryptoeconomist"
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
