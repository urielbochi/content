import React from "react";
import "./about.css";
import third from "../images/third.png";
import me from "../images/me.jpeg";
import four from "../images/four.png";
import five from "../images/five.png";
import "animate.css";

function About() {
  return (
    <section id="about" className="aboutBack">
        <h1 className="about__me about__container">About me</h1>
      <section className="about__content">

        <div className="about__main">
          <img
            className="about__image"
            src={me}
            alt="Na imagem, Uriel usando uma máscara sobre o rosto"
          />
          <article>
            <h1 className="about__first-game">Meet me!</h1>
            <p className="about__description">
              Here I am! A brazilian web developer student. I've been using
              computers since I was a kid. What was supposed to be a hobby,
              became a passion. I feel like I am in the right direction,
              learning and praticing everyday.
            </p>
          </article>
        </div>

        <div className="about__main">
          <img
            className="about__image"
            src={four}
            alt="Desenho de um braço de uma pessoa tocando o de outra"
          />
          <article>
            <h1 className="about__first-game">Know me</h1>
            <p className="about__description">
              {" "}
              I'm little shy but with a little effort I can build strong
              relationships with people. Two qualities I appreciate the most in
              myself are my creativity and persistence. I'm currently learning
              Chinese and improving my English.
            </p>
          </article>
        </div>

        <div className="about__main">
          <img
            className="about__image"
            src={third}
            alt="Meu jogo favorito, Lunia. Na imagem, duas personagens do jogo. A primeira mulher utiliza um espartilho de cor vermelha, tem olhos verdes, pele clara e orelhas pontudas. A segunda personagem utiliza um cropped amarelo e uma saia curta, possui olhos da cor azul, cabelo comprido e ambas as personagens possuem o cabelo de cor loira."
          />
          <article>
            <h1 className="about__first-game about__fix">The beginning</h1>
            <p className="about__description">
              {" "}
              I got into programming doing one of the things I love the most:
              playing video games. I enjoyed spending my time changing the
              source code for my favourite game (Lunia) and playing it at the
              same time.
            </p>
          </article>
        </div>

        <div className="about__main">
          <img
            className="about__image"
            src={five}
            alt="Na imagem, um desenho colorido de mãos digitando em um teclado de computador. A tela do computador exibe algumas letras e números, os dedos estão posicionados em cima das teclas."
          />
          <article>
            <h1 className="about__first-game">Skills</h1>
            <p className="about__description">
              {" "}
              About my tech skills, I've been improving: HTML | CSS | Javascript
              | React | Redux | Context API | MySQL | MongoDb | Git
            </p>
          </article>
        </div>
        
      </section>
    </section>
  );
}

export default About;
