import React from 'react';
import Particles from 'react-particles-js';

const PlanetBMain = () => {
  const params = {
    particles: {
      line_linked: {
        enable: true
      },
      number: {
        value: 200
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
      <Particles params={params} className="particles"/>
      <span className="titles">
        <h1 className="maintitle">PlanetB</h1>
				<h6 className="maintitle-sub">Aliens Living on the Blockchain Planet</h6>
				<p className="main-glyphicon"><span className="glyphicon glyphicon-globe"></span></p>
        <h2 className="subtitle">Research centered Blockchain Community in POSTECH</h2>
      </span>
    </div>
  );
};

export default PlanetBMain;
