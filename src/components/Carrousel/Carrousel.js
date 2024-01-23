import { useState } from "react";
import arrowPrev from "../../assets/flech-left.png";
import arrowNext from "../../assets/flech-right.png";
import "./Carrousel.scss";

const Carrousel = ({ slides }) => {
  const [currentImg, setcurrentImg] = useState(0);
  const length = slides.length;

  const nextImage = () => {
    setcurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
  };

  const prevImage = () => {
    setcurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
  };

  return (
    <div className="carrousel-container">
      {slides.map((image, index) => {
        return <div key={index}>{index === currentImg && <img className="housing-img" src={image} alt="housing" />}</div>;
      })}

      {length > 1 && ( 
        <div className="carrousel-arrows">
          <img src={arrowPrev} onClick={prevImage} className="arrow" alt="Previous Arrow" />
          <img src={arrowNext} onClick={nextImage} className="arrow" alt="Next Arrow" />
        </div>
      )}

      {length > 1 && ( 
        <div className="carrousel-counter">
          <p>
            {currentImg + 1}/{length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Carrousel;
