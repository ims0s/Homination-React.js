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
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipisicing elit. Non, quo.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="about-card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <BiLaptop size={"50px"} />
                  <h3 className="card-title">Capient Rapire</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <button className="btn bg-warning text-dark">
                    see provider
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="about-card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <BsJournal size={"50px"} />
                  <h3 className="card-title">Capient Rapire</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <button className="btn bg-warning text-dark">
                    see provider
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="about-card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <BiIntersect size={"50px"} />
                  <h3 className="card-title">Capient Rapire</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <button className="btn bg-warning text-dark">
                    see provider
                  </button>
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
