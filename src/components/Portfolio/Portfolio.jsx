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
                showcasing our commitment to delivering impeccable craftsmanship, <br />
                innovative design, and transformative spaces that inspire and delight.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="about-card text-light text-center bg-white pb-2 h-100 d-flex flex-column">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img src={img0} className="img-fluid" alt="" />
                  </div>
                  <h3 className="card-title">Villa</h3>
                  <p className="lead">
                  Indulge in the epitome of luxury living with our exquisite villas, 
                  where elegance meets comfort, offering a haven of tranquility and sophistication.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="about-card text-light text-center bg-white pb-2 h-100 d-flex flex-column">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img src={img1} className="img-fluid" alt="" />
                  </div>
                  <h3 className="card-title">home decoreation</h3>
                  <p className="lead">
                  Elevate your living space with our expert home decoration services, 
                  where style and creativity blend harmoniously to create a 
                  personalized ambiance that reflects your unique taste and personality
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="about-card text-light text-center bg-white pb-2 h-100 d-flex flex-column">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img src={img2} className="img-fluid" alt="" />
                  </div>
                  <h3 className="card-title">gardin wood</h3>
                  <p className="lead">
                  Enhance the natural beauty of your outdoor space with our 
                  exquisite garden wood collection, featuring premium materials 
                  and timeless designs that effortlessly elevate your garden aesthetics.
                  </p>
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
