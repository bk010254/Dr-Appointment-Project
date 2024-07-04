
import React,{useState} from 'react';
import './Crousel.css'

const Crousell = ({ images, content }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel-container">
    <div className="content">{content}</div>
    <div className="carousel">
      <button className="left-arrow" onClick={prevSlide}>{'<'}</button>
      <img src={images[currentIndex]} alt="slide" className="image" />
      <button className="right-arrow" onClick={nextSlide}>{'>'}</button>
    </div>
  </div>
  )
}

export default Crousell
