import React from "react";
import './footer.css';

function Home() {
  return (
    <section className="home__content" id="home">
      <div className="home__container">
        <h1 className="title">Uriel Bochi</h1>
        <p className="home__description">
          Hey there! Welcome to my Portfolio. I appreciate your visit. Swipe
          down to the next sections
        </p>
      </div>
      <div className="footer__content">
        <p>My Portfolio</p>
      </div>
    </section>
  );
}

export default Home;
