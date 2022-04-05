import Modal from "react-modal";
import { useContext, useState } from "react";
import "./modal.css";
import { MyContext } from "../context/context";
import ModalCard from "./modalCard";
import myPortfHeader from "../images/myPortfolioHeader.png";
import myPortfAbout from "../images/myPortfolioAbout.png";
import myPortfProjects from "../images/myPortfolioProjects.png";
import myRecipesLogin from "../images/recipesLogin.png";
import myRecipesMain from "../images/recipesMain.png";
import myRecipesProf from "../images/recipesProfile.png";
import pixelsMain from "../images/pixelMain.png";
import pixelsColored from "../images/pixelColored.png";
import shoppingCart from "../images/ShoppingCard.png";
import shoppingCartUP from "../images/shoppingCartList.png";
import solarSystem from "../images/solarSystem.png";
import solarSystemEarth from "../images/solarSystemEarth.png";
import closeButton from "../images/iconClose.png";

Modal.setAppElement("#root");

function Moddal() {
  const { modalOpen, setModalOpen, selectedItem, setSelectedItem } =
    useContext(MyContext);

  const customStyles = {
    content: {
      background: "black",
      marginTop: "80px",
      marginBottom: "60px",
    },
  };

  const changeToClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="container">
      <Modal
        isOpen={modalOpen}
        onRequestClose={changeToClose}
        closeTimeoutMS={200}
        className="modal__configuration"
      >
        <div className="modal__close-button">
        <img src={closeButton} alt="Close Button" onClick={changeToClose} />
        </div>
        {selectedItem === "recipes__app" && (
          <ModalCard
            title="Recipes app"
            gitLink="https://github.com/urielbochi/recipes-app"
            liveLink="https://urielbochi.github.io/recipes-app/"
            imageOne={myRecipesLogin}
            imageTwo={myRecipesMain}
            imageThree={myRecipesProf}
            subtitle="HTML CSS REACT JS CONTEXT API REDUX HOOKS"
            description="A recipes app (made for mobile) where the user can interact and apply different types of searches and filters. This project was made in group. In the app, its possible to find food and drink recipes. When the user opens a recipe, they can start it and its progress will be saved, in addition the user can also favorite the recipe. Theres a profile page which has the done and favorited recipes. Its possible to search recipes using the search bar and applying the filters or through categories."
          />
        )}
        {selectedItem === "my__portfolio" && (
          <ModalCard
            title="My Portfolio"
            gitLink="https://github.com/urielbochi/content"
            liveLink="https://urielbochi.github.io/content/"
            imageOne={myPortfHeader}
            imageTwo={myPortfAbout}
            imageThree={myPortfProjects}
            subtitle="HTML CSS REACT JS REACT MODAL CONTEXT API HOOKS"
            description=" An application where you know a little about me :) The site palette
            represents my favorites colors. My biggest problem building it was
            for sure, responsivity"
          />
        )}
        {selectedItem === "shopping__cart" && (
          <ModalCard
            title="Shopping cart"
            gitLink="https://github.com/urielbochi/shopping-cart"
            liveLink="https://urielbochi.github.io/shopping-cart/"
            imageOne={shoppingCart}
            imageTwo={shoppingCartUP}
            subtitle="HTML CSS JS "
            description="This project was of utmost importance to my professional development because I was able to expand my knowledge on:

            API and Async functions
            DOM
            HTML
            JAVASCRIPT.
            All data used in this project were obtained from Mercado Livre.
          "
          />
        )}
        {selectedItem === "solar__system" && (
          <ModalCard
            title="Solar System"
            gitLink="https://github.com/urielbochi/solar-system"
            liveLink="https://urielbochi.github.io/solar-system/"
            imageOne={solarSystem}
            imageTwo={solarSystemEarth}
            subtitle="HTML CSS JS REACT MOCK HOOKS "
            description="My first REACT application, developed early 2021. Every time you click on a planet, it changes the background and display informations about the planet.
        "
          />
        )}
        {selectedItem === "pixels" && (
          <ModalCard
            title="Pixel art"
            gitLink="https://github.com/urielbochi/pixels-art"
            liveLink="https://urielbochi.github.io/pixels-art/"
            imageOne={pixelsMain}
            imageTwo={pixelsColored}
            subtitle="HTML CSS JS "
            description="My first JS game where you can color the squares however you like. The color palette updates every time the page is reloaded.
            "
          />
        )}
      </Modal>
    </div>
  );
}

export default Moddal;
