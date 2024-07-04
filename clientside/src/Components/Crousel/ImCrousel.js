import React from 'react';
import './Crousel.css';
import Carousel from 'react-bootstrap/Carousel';

const ImCarousel = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <div className="slide">
        <img
          className="d-block w-100 blur"
          src="https://htmldemo.themefax.com/madifax/images/blog-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="caption-left">
          <h3 style={{fontFamily:'fantasy'}}>Medical Services</h3>
          <h3>That You can <span style={{color:'red'}}>Trust</span></h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="slide">
        <img
          className="d-block w-100 blur"
          src="https://www.themesindustry.com/html/medix/images/banner2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className="caption-left">
        <h3 style={{fontFamily:'fantasy'}}>Medical Services</h3>
          <h3>A Complete Health Care <span style={{color:'red'}}>Solution</span></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  See All Services
</button>
        </Carousel.Caption>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="slide">
        <img
          className="d-block w-100 blur"
          src="http://www.themesindustry.com/html/medix/images/banner1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className="caption-left">
        <h3 style={{fontFamily:'fantasy'}}>Medical Services</h3>
          <h3>The world best <span style={{color:'red'}}>Medical Care</span> Treatment</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </div>
    </Carousel.Item>
  </Carousel>
  );
};

export default ImCarousel;
