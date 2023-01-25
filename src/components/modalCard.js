import { useState } from "react";
import "./modal.css";
import "./modalCard.css";
import "animate.css";

function ModalCard({
  title,
  subtitle,
  description,
  gitLink,
  liveLink,
  imageOne,
  imageTwo,
  imageThree,
}) {
  const [position, setPosition] = useState(0);
  const [imageBank] = useState([imageOne, imageTwo, imageThree]);

  return (
    <div className="container__modalCard">
      <div className="carousel__container">
        <div className="modalcard__images-container">
          <img alt="Carousel" className="modalCard__image" src={imageBank[position]} />
          <div className="modalcard__thumb-configuration">
          {imageBank.map((item, index) => (
              <img
                className="modalCard__thumb-image"
                src={item}
                alt="Carousel Thumb"
                onClick={() => setPosition(index)}
              />
          ))}
          </div>
        </div>
        <div className="modal__project-description-container">
          <h1 className="modal__title">{title}</h1>
          <p className="modal__subtitle">{subtitle}</p>
          <p className="modal__project-description">{description}</p>
          <a href={gitLink} target="_blank" rel="noreferrer" className="modal__app-links">Github link</a>
          {liveLink && <a href={liveLink} target="_blank" rel="noreferrer" className="modal__app-links">Live application</a>}       
          </div>
      </div>
    </div>

  );
}

export default ModalCard;
