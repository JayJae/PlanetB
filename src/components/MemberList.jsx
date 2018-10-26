import React from 'react';
import Member from './Member';
import { Grid } from 'react-bootstrap';

const MemberList = () => {
  const old_memberInfos = [
    {
      name: "Ki Young Ju",
      description: "Undergrad @POSTECH IME, Founder of Planet.B, Product Manager @theloop",
    },
    {
      name: "Byeong Kook Jang",
      description: "Undergrad @POSTECH IME, Token Economist, ICO Expert"
    },
    {
      name: "Jin Woo Park",
      description: "Undergrad @POSTECH MSE, Product Manager @Chain Partners"
    },
    {
      name: "Kyung June Lee",
      description: "PhD Candidate @POSTECH EE, Hardware AI Chip, Co-founder of Hozaebox"
    },
    {
      name: "Hyun Jae Park",
      description: "Undergrad @POSTECH IME, Full Stack Developer @Penta Security Systems"
    },
    {
      name: "Byung Jun Kim",
      description: "PhD Candidate @POSTECH EE, Hardware AI Chip, Co-founder of Hozaebox"
    },
    {
      name: "Hyo Jin Ju",
      description: "Undergrad @POSTECH EE, Member of blockchain study group"
    },
    {
      name: "Kyung Min Kim",
      description: "PhD Candidate @POSTECH CS, specalized in database, Full Stack Developer"
    },
    {
      name: "Ji Sung Yoon",
      description: "PhD Candidate @POSTECH IME, specalized in complex system"
    },
    {
      name: "Do Yup Lee",
      description: "PhD Candidate @POSTECH CITE, AI, Kakao Brain",
    },
    {
      name: "Hyun Seong Jeon",
      description: "Undergrad @POSTECH CS, Developer"
    },
    {
      name: "Jae Yeon Cho",
      description: "Undergrad @POSTECH CITE, Engineer @Penta Security Systems"
    },
    {
      name: "Kyung Woon Ju",
      description: "Undergrad @POSTECH IME, Developer @Penta Security Systems, Researcher @Coinone"
    },
    {
      name: "Tae Yeol Jeong",
      description: "PhD @POSTECH CS, specialized in fog computing"
    },
    {
      name: "Dong Hoon Ahn",
      description: "Undergrad @POSTECH CITE. Researcher @Penta Security Systems"
    },
    {
      name: "Beom Jun Sohn",
      description: "Undergrad @POSTECH CITE, DApp Research"
    },
    {
      name: "Kyung Chan Ko",
      description: "PhD Candidate @POSTECH CS, specialized in distributed computing"
    },
    {
      name: "Duk Sang Lee",
      description: "PhD Candidate @POSTECH IME, Researcher of POSTECH blockchain center"
    },
    {
      name: "Min Jae Kim",
      description: "Undergrad @POSTECH CS, Cryptoeconomist"
    }
  ]

  const old_memberList = old_memberInfos.map(memberInfo => {
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
      <Grid>
        <div className="maintitle-dark-leftsided-header"><span>Members</span></div>
        <div className="maintitle-dark-leftsided-paragraph">Our team consists of PhD candidates, developers, entrepreneurs and engineering undergrads all coming from <strong>POSTECH</strong>(Pohang University of Science and Technology).
          <br/><br/><br/>

          <h3><i>Acting</i></h3>
          Ki Young Ju //
          Beom Soo Lim //
          Kyung Min Kim //
          Byeong Kook Jang //
          Soo Jin Lim
          <br/><br/>
          <h3><i>Alumni</i></h3>
          Hyojin Ju //
          Jin Woo Park //
          Kyung June Lee //
          Hyun Jae Park //
          Byung Jun Kim //
          Ji Sung Yoon //
          Do Yup Lee //
          Jae Yeon Cho //
          Kyung Woon Ju //
          Tae Yeol Jeong //
          Dong Hoon Ahn //
          Beom Jun Sohn //
          Kyung Chan Ko //
          Duk Sang Lee //
          Min Jae Kim //
          Hyun Seong Jeon
        </div>
      </Grid>
    </div>
  );
};

export default MemberList;
