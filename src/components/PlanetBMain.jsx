import React from 'react';
import Particles from 'react-particles-js';

const PlanetBMain = () => {
  const width = window.innerWidth;
  let numParticles = width / 6;

  const params = {
    particles: {
      line_linked: {
        enable: true
      },
      number: {
        value: numParticles
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        }
      }
    }
  };

  return (
    <div className="planetb-main">
      <Particles params={params} className="particles" canvasClassName="particles-canvas"/>
      <div className="titles" align="middle">
        <img src="./src/images/logo_white.png" width="auto" height="10%" className="title-image"/>
        <h6 className="maintitle-sub">Aliens Living on the Blockchain Planet</h6>
        <p className="main-glyphicon"><span className="glyphicon glyphicon-globe"></span></p>
        <h2 className="subtitle">Research centered Blockchain Community in POSTECH</h2>
        <div id="container">
          <div className="button-2">
            <div className="eff-2"></div>
            <a href="facebook.com"> Learn more </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetBMain;
