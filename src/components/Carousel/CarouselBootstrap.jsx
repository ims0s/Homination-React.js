import React from "react";
// import { Link } from "react-router-dom";
import img0 from "../../images/homenation.webp";
import img1 from "../../images/home-1.jpg";
import img2 from "../../images/home-2.jpg";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const CarouselBootstrap = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={img0} alt="First slide" />
        <Carousel.Caption>
          <div class="carousel-caption">
            <h5>Your Dream House</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
              nulla, tempore. Deserunt excepturi quas vero.
            </p>
            <p>
              <Link to="#" class="btn btn-warning mt-3">
                Learn More
              </Link>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
              nulla, tempore. Deserunt excepturi quas vero.
            </p>
            <p>
              <Link to="#" class="btn btn-warning mt-3">
                Learn More
              </Link>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
              nulla, tempore. Deserunt excepturi quas vero.
            </p>
            <p>
              <Link to="#" class="btn btn-warning mt-3">
                Learn More
              </Link>
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselBootstrap;
