import React from "react";
import Footer from "./Fotter";
import NavBar from "./Navbar";
import images from "../images/firstback.jpg";

function Home() {
  return (
    <div className="home__image">
      <NavBar />
      <div className="home__container">
        <h1 className="title">My Portfolio</h1>
        <p className="pConfig">
          Hey there! Welcome to my Portfolio. I appreciate your visit. Swipe
          down to the next sections
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
