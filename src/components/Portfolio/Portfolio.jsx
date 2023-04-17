import React from "react";
import img0 from "../../images/f1.jpg";
import img1 from "../../images/f2.jpg";
import img2 from "../../images/f3.jpg";

const Portfolio = () => {
  return (
    <>
      {/* <!-- portfolio strats --> */}
      <section id="portfolio" className="portfolio section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2 className="title">Our Projects</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipisicing elit. Non, quo.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="about-card text-light text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img src={img0} className="img-fluid" alt="" />
                  </div>
                  <h3 className="card-title">Villa</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <button className="btn bg-warning text-dark">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="about-card text-light text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img src={img1} className="img-fluid" alt="" />
                  </div>
                  <h3 className="card-title">home decoreation</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <button className="btn bg-warning text-dark">
                    learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="about-card text-light text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img src={img2} className="img-fluid" alt="" />
                  </div>
                  <h3 className="card-title">gardin wood</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <button className="btn bg-warning text-dark">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- portfolio ends --></> */}
    </>
  );
};

export default Portfolio;
