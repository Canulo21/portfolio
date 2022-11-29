import "./App.css";
import "./assets/js/script.js";
import myLogo from "./assets/img/jc-logo.png";
import myFb from "./assets/img/fb.png";
import myGit from "./assets/img/github.png";
import ReactTooltip from "react-tooltip";
import Services from "./components/Services";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar-container">
          <div className="navbar">
            <div className="mylogo">
              <a href="#" className="active">
                <img style={{ height: "50px" }} src={myLogo} alt="logo" />
              </a>
            </div>
            <ul>
              <li>
                <a href="#" className="active">
                  home
                </a>
              </li>
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#skills">skills</a>
              </li>
              <li>
                <a href="#projects">projects</a>
              </li>
              <li>
                <a href="#contacts">contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div class="banner-wrapper">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div id="imagecontainer">
          <div className="left-text">
            <p>
              Hello there, <span class="wave">👋</span>
            </p>
            <p className="animate__animated animate__fadeInLeft">
              I’m Jhon Carlo Canulo
            </p>
            <p className="animate__animated animate__fadeInLeft animate__delay-1s">
              a <bold>Front-End Developer</bold> from Philippines{" "}
              <span>👨‍💻</span>
            </p>
            <div className="cv_btn animate__animated animate__fadeIn animate__delay-2s">
              <a href="#">Download CV</a>
            </div>
            <div className="social-media-container">
              <div className="box animate__animated animate__zoomIn animate__delay-3s">
                <a
                  data-tip
                  data-for="fbTip"
                  aria-label="Facebook"
                  href="https://www.facebook.com/jhoncarlo.canulo"
                  target="__blank"
                >
                  <img src={myFb} alt="Facebook" />
                </a>
                <ReactTooltip id="fbTip" place="bottom" effect="solid">
                  Facebook
                </ReactTooltip>
              </div>
              <div className="box animate__animated animate__zoomIn animate__delay-3s">
                <a
                  data-tip
                  data-for="gitTip"
                  aria-label="Github"
                  href="https://github.com/Canulo21"
                  target="__blank"
                >
                  <img src={myGit} alt="Github" />
                </a>
                <ReactTooltip id="gitTip" place="bottom" effect="solid">
                  Github
                </ReactTooltip>
              </div>
            </div>
          </div>
          <div className="right-image"></div>
        </div>
      </div>
      <div id="page-content-wrap">
        <section id="services">
          <Services></Services>
        </section>
        <section id=""></section>
        <section id="about">
          <About></About>
        </section>
        <section id="skills">
          <Skills></Skills>
        </section>
        <section id="projects"></section>
        <section id="contacts"></section>
      </div>
    </div>
  );
}

export default App;
