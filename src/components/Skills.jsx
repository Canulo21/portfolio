import React from "react";
import reacts from "../assets/img/react.png";
import wp from "../assets/img/wp.png";
import html from "../assets/img/html5.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import jquery from "../assets/img/jquery.png";
import mysql from "../assets/img/mysql.png";
import php from "../assets/img/php.png";
import ps from "../assets/img/photoshop.png";
import xd from "../assets/img/xd.png";
import git from "../assets/img/git.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const Skills = () => {
  return (
    <div className="skills-wrapper">
      <div className="skills-container">
        <h2>My Skills</h2>
        <p className="content">
          Here are the technology stacks that I have learned since I started
          studying in the field of Front-End development. Furthermore, I am
          currently a WordPress developer and learning the ReactJS framework, in
          this way, it will help me to improve my skills in terms of user
          interface and user experience.
        </p>
        <AnimationOnScroll animateIn="animate__zoomIn">
          <div className="skills-box">
            <div className="box">
              <h5>Framework</h5>
              <div className="holder-container">
                <div className="holder">
                  <div className="icon">
                    <img src={wp} alt="wordpress"></img>
                  </div>
                  <div className="text">
                    <p>WordPress</p>
                  </div>
                </div>
                <div className="holder">
                  <div className="icon">
                    <img src={reacts} alt="react"></img>
                  </div>
                  <div className="text">
                    <p>React JS</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <h5>Front End</h5>
              <div className="holder-container">
                <div className="holder">
                  <div className="icon">
                    <img src={html} alt="html5"></img>
                  </div>
                  <div className="text">
                    <p>HTML 5</p>
                  </div>
                </div>
                <div className="holder">
                  <div className="icon">
                    <img src={css} alt="css"></img>
                  </div>
                  <div className="text">
                    <p>CSS</p>
                  </div>
                </div>
                <div className="holder">
                  <div className="icon">
                    <img src={js} alt="javascript"></img>
                  </div>
                  <div className="text">
                    <p>Javascript</p>
                  </div>
                </div>
                <div className="holder">
                  <div className="icon">
                    <img src={jquery} alt="jquery"></img>
                  </div>
                  <div className="text">
                    <p>Jquery</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <h5>Back End</h5>
              <div className="holder-container">
                <div className="holder">
                  <div className="icon">
                    <img src={mysql} alt="mysql"></img>
                  </div>
                  <div className="text">
                    <p>MySQL</p>
                  </div>
                </div>
                <div className="holder">
                  <div className="icon">
                    <img src={php} alt="php"></img>
                  </div>
                  <div className="text">
                    <p>PHP</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <h5>Others</h5>
              <div className="holder-container">
                <div className="holder">
                  <div className="icon">
                    <img src={git} alt="github"></img>
                  </div>
                  <div className="text">
                    <p>GitHub</p>
                  </div>
                </div>
                <div className="holder">
                  <div className="icon">
                    <img src={ps} alt="photoshop"></img>
                  </div>
                  <div className="text">
                    <p>Photoshop</p>
                  </div>
                </div>
                <div className="holder">
                  <div className="icon">
                    <img src={xd} alt="adboeXd"></img>
                  </div>
                  <div className="text">
                    <p>Adobe XD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};
export default Skills;
