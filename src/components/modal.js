import Modal from "react-modal";
import { useContext, useState } from "react";
import "./modal.css";
import { MyContext } from "../context/context";
import ModalCard from "./modalCard";
import myPortfHeader from "../images/myPortfolioHeader.png";
import myPortfAbout from "../images/myPortfolioAbout.png";
import myPortfProjects from "../images/myPortfolioProjects.png";

Modal.setAppElement("#root");

function Moddal() {
  const { modalOpen, setModalOpen, selectedItem, setSelectedItem } =
    useContext(MyContext);

  const customStyles = {
    content: {
      display: "flex",
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
        style={customStyles}
        closeTimeoutMS={200}
      >
        {selectedItem === "recipes__app" && (
          <ModalCard title="Recipes application" />
        )}

        {selectedItem === "my__portfolio" && (
          <ModalCard
            title="My Portfolio"
            imageOne={myPortfHeader}
            imageTwo={myPortfAbout}
            imageThree={myPortfProjects}
            subtitle='HTML CSS REACT JS REACT MODAL CONTEXT API HOOKS'
            description=' An application where you know a little about me :) The site palette
            represents my favorites colors. My biggest problem building it was
            for sure, responsivity'

          />
        )}

        {selectedItem === "shopping__cart" && (
          <ModalCard title="Shopping Cart" />
        )}
        {selectedItem === "solar__system" && <ModalCard title="Solar System" />}
        {selectedItem === "pixels" && <ModalCard title="Pixel art" />}
      </Modal>
    </div>
  );
}

export default Moddal;
