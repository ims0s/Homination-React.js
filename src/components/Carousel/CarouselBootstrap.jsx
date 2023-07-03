import React from "react";
// import { Link } from "react-router-dom";
import img0 from "../../images/homenation.webp";
import img1 from "../../images/home-1.jpg";
import img2 from "../../images/home-2.jpg";
import Carousel from "react-bootstrap/Carousel";


const CarouselBootstrap = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={img0} alt="First slide" />
        <Carousel.Caption>
          <div class="carousel-caption">
            <h5>Your Dream House</h5>
            <p>
            where luxurious design meets breathtaking views, creating an enchanting haven that exceeds your wildest imagination.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="Second slide" />

        <Carousel.Caption>
          <div class="carousel-caption">
            <h5>Always Dedicated</h5>
            <p>
            going above and beyond to exceed your expectations and ensure your utmost satisfaction.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Third slide" />

        <Carousel.Caption>
          <div class="carousel-caption">
            <h5>True Construction</h5>
            <p>
            we believe in the power of quality craftsmanship, attention to detail, and unwavering commitment, making us the trusted partner for turning your vision into reality.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselBootstrap;
