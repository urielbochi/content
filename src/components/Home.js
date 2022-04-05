import React, { useState } from "react";
import Footer from "./Fotter";
import NavBar from "./Navbar";
import images from "../images/firstback.jpg";

function Home() {
  return (
    <div className="home__image" id="home">
      <NavBar />
      <div className="home__container">
        <h1 className="title">Uriel Bochi</h1>
        <p className="pConfig">
          Hey there! Welcome to my Portfolio. I appreciate your visit. Swipe
          down to the next sections
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
