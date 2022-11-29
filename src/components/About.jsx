import React from "react";
import basketball from "../assets/img/basketball.png";
import coding from "../assets/img/coding.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <div className="content-row">
          <div className="img-holder">
            <div className="img">
              <AnimationOnScroll animateIn="animate__fadeInDown">
                <img src={basketball} alt="basketball"></img>
              </AnimationOnScroll>
            </div>
            <div className="img">
              <AnimationOnScroll animateIn="animate__fadeInRight">
                <img src={coding} alt="programmer"></img>
              </AnimationOnScroll>
            </div>
          </div>
          <div className="text-right">
            <p>about me</p>
            <p>personal & life details</p>
            <p>
              I am JC, Front-end web developer with experience in building
              responsive web design. Proficient with HTML, CSS, and JS libraries
              and framework.
            </p>
            <p>
              I always want to improve my skills and work hard to excel at my
              job. I learned about discipline and the proper mindset as a
              front-end developer. I am always motivated when i accomplish
              something new.
            </p>
            <p>
              In my non-working days, I love to play basketball to maintain my
              physical and mental health. I also play instruments in our church
              for serving GOD.
            </p>
          </div>
        </div>
        <div className="content-row">
          <h2>My Self Motivational Quotes</h2>
          <p>
            <em>“Dili mag binugo!! Kay ang tawong bugo, bugo!!"</em>
          </p>
          <p>
            <em>--Jhon Carlo Canulo</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
