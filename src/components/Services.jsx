import React from "react";
import webdesign from "../assets/img/design.png";
import webfront from "../assets/img/frontend_dev.png";
import webrespo from "../assets/img/responsive-view.png";
import myService from "../assets/img/businessman-holding-cup.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const Services = () => {
  return (
    <div className="service-wrap">
      <div className="myservice">
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <img src={myService} alt="service"></img>
        </AnimationOnScroll>
      </div>
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div className="service-container">
          <h1>What Services I provide?</h1>
          <div className="box">
            <img src={webfront} alt="Frontdev" />
            <p className="title">Front-End Development</p>
            <p className="content">
              I can create Front-end for website using HTML, CSS , Jquery and
              Javascript framework especially using WordPress and currently
              learning ReactJS.
            </p>
          </div>
          <div className="box">
            <img src={webdesign} alt="WebDesign" />
            <p className="title">Web Design</p>
            <p className="content">
              Using HTML, CSS, Javascript, Jquery, Adobe Photoshop and Adobe XD
              tool, I can create static modern website designs.
            </p>
          </div>
          <div className="box">
            <img src={webrespo} alt="Responsive" />
            <p className="title">Responsive Design</p>
            <p className="content">
              Capable to develop a website for all types of devices and sizes of
              screens.
            </p>
          </div>
        </div>
      </AnimationOnScroll>
      <div className="square-1"></div>
      <div className="square-2"></div>
    </div>
  );
};

export default Services;
