import { useContext, useState } from "react";
import "./modal.css";
import four from "../images/four.png";
import { MyContext } from "../context/context";
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
  const { selectedItem, setSelectedItem } = useContext(MyContext);
  const [position, setPosition] = useState(0);
  const [imageBank, setImageBank] = useState([imageOne, imageTwo, imageThree]);

  return (
    <div className="container__modalCard">
      <div className="carousel__container">
        <img className="modalCard__image" src={imageBank[position]} />
        <div className="modal__project-description-container">
          <h1 className="modal__title">{title}</h1>
          <p className="modal__subtitle">
            {subtitle}
          </p>
          <p className="modal__project-description">
           {description}
          </p>
          <p className="modal__app-links">Github link {gitLink}</p>
          <p className="modal__app-links">Live application {liveLink}</p>
        </div>
      </div>
      <div className="container__thumb">
        {imageBank.map((item, index) => (
          <img
            className="modalCard__thumb-image"
            src={item}
            onClick={() => setPosition(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ModalCard;
