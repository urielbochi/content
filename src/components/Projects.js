import React, { useContext } from "react";
import solarSystem from "../images/ygona.png";
import portf from "../images/portf.png";
import TractianLogo from "../images/TractianLogo.png";

import restaurant from "../images/valeria.jpg";
import shopp from "../images/juju.jpeg";
import pixel from "../images/pixel.jpeg";
import { MyContext } from "../context/context";
import "./projects.css";
import Moddal from "./modal";

function Projects() {
  const { modalOpen, setModalOpen, setSelectedItem } = useContext(MyContext);

  const setToFalse = () => {
    setModalOpen(true);
  };

  const getEvent = ({ target }) => {
    setModalOpen(true);
    if (target.className.includes("recipes__app")) {
      setSelectedItem("recipes__app");
    } else if (target.className.includes("my__portfolio")) {
      setSelectedItem("my__portfolio");
    } else if (target.className.includes("shopping__cart")) {
      setSelectedItem("shopping__cart");
    } else if (target.className.includes("solar__system")) {
      setSelectedItem("solar__system");
    } else if (target.className.includes("pixels")) {
      setSelectedItem("pixels");
    } else if (target.className.includes("tractian__dashboard")) {
      setSelectedItem("tractian__dashboard");
    }
  };

  return (
    <section className="projects__background projects__container" id="projects">
        <h1 className="projects__h1-title projects__title">My Projects</h1>
        
      <section className="projects__content">
        <div className="image recipes__app" onClick={(e) => getEvent(e)}>
          <img
            className="projects__image-config image__img recipes__app"
            src={restaurant}
            alt="Imagem do projeto Recipes App. A foto foi tirada a noite, em um local escuro iluminado pelas luzes neon de cor roxa do local. É um bar, em seu topo há uma placa com o nome do bar - The District, abaixo, outra placa escrito Party Bar and Grill. As paredes do bar são feitas de vidro, acima dessas paredes existe uma placa que diz COURT CENTER "
          />
          <div className="image__overlay recipes__app">
            <h1 className="image__title recipes__app">Recipes App</h1>
          </div>
        </div>

        <div className="image tractian__dashboard">
          <img
            className="projects__image-config image__img tractian__dashboard"
            src={TractianLogo}
            alt="Imagem do projeto Tractian Dashboard. Desenho com fundo azul onde está presente um operário anotando a situação de uma maquina. Acima de cada máquina existe um sinal vermelho com X ou um sinal verde, vermelho se a máquina está com defeito, verde se estiver em funcionamento. A primeira máquina é marcada com um X, a segunda e a terceira também são marcadas com o sinal verde."
          />
          <div
            className="image__overlay tractian__dashboard"
            onClick={(e) => getEvent(e)}
          >
            <h1 className="image__title tractian__dashboard">Tractian Dashboard</h1>
          </div>
        </div>

        <div className="image my__portfolio">
          <img
            className="projects__image-config image__img my__portfolio"
            src={portf}
            alt="Imagem bege representando o projeto My Portfolio"
            />
          <div
            className="image__overlay my__portfolio"
            onClick={(e) => getEvent(e)}
          >
            <h1 className="image__title my__portfolio">My Portfolio</h1>
          </div>
        </div>

        {modalOpen && <Moddal />}

        <div className="image shopping__cart" onClick={(e) => getEvent(e)}>
          <img
            className="projects__image-config image__img shopping__cart"
            src={shopp}
            alt="Imagem do projeto Shopping Card, contém sacolas de compra de várias cores"
          />
          <div className="image__overlay shopping__cart">
            <h1 className="image__title shopping__cart">Shopping Cart</h1>
          </div>
        </div>

        <div className="image solar__system" onClick={(e) => getEvent(e)}>
          <img
            className="projects__image-config image__img solar__system"
            src={solarSystem}
            alt="Imagem do projeto Solar System, contém a imagem de um céu estrelado em uma galáxia estranha."
          />
          <div className="image__overlay solar__system">
            <h1 className="image__title solar__system">Solar System</h1>
          </div>
        </div>

        <div className="image pixels" onClick={(e) => getEvent(e)}>
          <img
            className="projects__image-config image__img pixels"
            src={pixel}
            alt="Imagem do projeto Pixel Art, contém a imagem de uma pintura abstrata, cheia de cores."
          />
          <div className="image__overlay pixels">
            <h1 className="image__title pixels">Pixels</h1>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Projects;
