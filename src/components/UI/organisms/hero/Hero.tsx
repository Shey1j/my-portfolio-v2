import React from "react";
import Particles from "react-particles-js";
import Button from "../../atoms/button/Button";
import Header from "../../atoms/header/Header";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <div className="sheyi-hero mb-4">
      <div className="sheyi-hero-content row">
        <div className="col-xl-8 hero-text">
          <div className="ml-4 ml-lg-0">
            <Header styleClass="hero-role" identifier="">
              <i className="fa fa-laptop mr-2" aria-hidden="true" />
              FRONTEND ENGINEER
            </Header>
            <h1>Welcome to my page</h1>
            <Button>Let's talk</Button>
          </div>
        </div>
        <div className="d-none d-lg-flex col-lg-6 col-xl-4 hero-image pr-0">
          <img
            src="/assets/images/seyi.jpg"
            className="w-100"
            alt="seyi's profile"
          />
        </div>
      </div>
      <div className="sheyi-hero-background">
        <Particles
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
