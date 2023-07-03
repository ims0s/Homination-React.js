import React from "react";
import { BiLaptop } from "react-icons/bi";
import { BsJournal } from "react-icons/bs";
import { BiIntersect } from "react-icons/bi";
const Services = () => {
  return (
    <>
      {/* <!-- services section Starts --> */}
      <section className="services section-padding" id="services">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2 className="title">Types of Work</h2>
                <p>
                Discover a wide array of exceptional work types tailored to your needs, <br />
                from renovations and remodeling to new construction and beyond,  <br />
                all delivered with uncompromising quality.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="about-card text-white text-center bg-dark pb-2 h-100 d-flex flex-column">
                <div className="card-body">
                  <BiLaptop size={"50px"} />
                  <h3 className="card-title">Renovations and Remodeling</h3>
                  <p className="lead">
                  Transform your existing space into a stunning masterpiece through our 
                  expertise in renovations and remodeling, adding both functionality and aesthetic appeal.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="about-card text-white text-center bg-dark pb-2 h-100 d-flex flex-column">
                <div className="card-body">
                  <BsJournal size={"50px"} />
                  <h3 className="card-title">New Construction</h3>
                  <p className="lead">
                  From concept to completion, our skilled team brings your vision to life with 
                  new construction projects, ensuring attention to detail, quality materials, and efficient execution.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="about-card text-white text-center bg-dark pb-2 h-100 d-flex flex-column">
                <div className="card-body">
                  <BiIntersect size={"50px"} />
                  <h3 className="card-title">Custom Designs</h3>
                  <p className="lead">
                  Experience the joy of owning a truly unique space tailored to your preferences. Our team 
                  specializes in creating custom designs that reflect your individual 
                  style and preferences, resulting in a one-of-a-kind environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- services section Ends --> */}
    </>
  );
};

export default Services;
