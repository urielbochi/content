import React from "react";
import "./about.css";
import third from "../images/third.png";
import me from "../images/me.jpeg";
import four from '../images/four.png'
import five from '../images/five.png'
import NavBar from "./Navbar";
import "animate.css";



function About() {
  return (
    <div id="about" className="aboutBack">
      <div className="about__container">
        <h1 className="about__me">About me</h1>
      </div>
      <div className="about__row__align__main-flex">
        <div className="columnTest">
        <img className="about__image__fix" src={me} />
        <div>
          <h1 className="about__first-game">Meet me!</h1>
          <p className="about__description">
            Here I am! A brazilian web developer student. I've been using
            computers since I was a kid. What was supposed to be a hobby, became
            a passion. I feel like I am in the right direction, learning and
            praticing everyday.
          </p>
          </div>
        </div>
        
        <div className="columnTest">
        <img className="about__image__fix" src={four} />
        <div>
          <h1 className="about__first-game">Know me</h1>
          <p className="about__description">
            {" "}
            I'm little shy but with a little effort I can build strong
            relationships with people. Two qualities I appreciate the most in
            myself are my creativity and persistence. I'm currently learning
            Chinese and improving my English.
          </p>
          </div>
        </div>

        <div className="columnTest">
        <img className="about__image__fix" src={third} />
        <div>
          <h1 className="about__first-game about__fix">The beginning</h1>
          <p className="about__description">
            {" "}
            I got into programming doing one of the things I love the most: playing video games. I enjoyed spending my time changing the source code for my favourite game (Lunia) and playing it at the same time.

          </p>
          </div>
        </div>

        <div className="columnTest">
        <img className="about__image__fix" src={five} />
        <div>
          <h1 className="about__first-game">Skills</h1>
          <p className="about__description">
            {" "}
            About my tech skills, I've been improving: HTML | CSS | Javascript | React | Redux | Context API | MySQL | MongoDb | Git
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
