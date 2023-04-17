import React from "react";
import img0 from "../../images/team-1.jpg";
import img1 from "../../images/team-2.jpg";
import img2 from "../../images/team-3.jpg";
import img3 from "../../images/team-4.jpg";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
const Term = () => {
  return (
    <>
      <section className="team section-padding" id="team">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2 className="title">Our Team</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipisicing elit. Non, quo.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="about-card text-center">
                <div className="card-body">
                  <img src={img0} alt="" className="img-fluid rounded-circle" />
                  <h3 className="card-title py-2">Amr Naiem</h3>
                  <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sequi ipsam nostrum illo tempora esse quibusdam.
                  </p>

                  <p className="socials">
                    <AiOutlineTwitter size={"25px"} />
                    <RiFacebookCircleFill size={"25px"} />
                    <AiFillLinkedin size={"25px"} />
                    <AiOutlineInstagram size={"25px"} />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="about-card text-center">
                <div className="card-body">
                  <img src={img1} alt="" className="img-fluid rounded-circle" />
                  <h3 className="card-title py-2">Amr Serag</h3>
                  <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sequi ipsam nostrum illo tempora esse quibusdam.
                  </p>
                  <p className="socials">
                    <AiOutlineTwitter size={"25px"} />
                    <RiFacebookCircleFill size={"25px"} />
                    <AiFillLinkedin size={"25px"} />
                    <AiOutlineInstagram size={"25px"} />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="about-card text-center">
                <div className="card-body">
                  <img src={img2} alt="" className="img-fluid rounded-circle" />
                  <h3 className="card-title py-2">Mahmoud Sarour</h3>
                  <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sequi ipsam nostrum illo tempora esse quibusdam.
                  </p>
                  <p className="socials">
                    <AiOutlineTwitter size={"25px"} />
                    <RiFacebookCircleFill size={"25px"} />
                    <AiFillLinkedin size={"25px"} />
                    <AiOutlineInstagram size={"25px"} />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="about-card text-center">
                <div className="card-body">
                  <img src={img3} alt="" className="img-fluid rounded-circle" />
                  <h3 className="card-title py-2">Abdlerhman Nasser</h3>
                  <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sequi ipsam nostrum illo tempora esse quibusdam.
                  </p>
                  <p className="socials">
                    <AiOutlineTwitter size={"25px"} />
                    <RiFacebookCircleFill size={"25px"} />
                    <AiFillLinkedin size={"25px"} />
                    <AiOutlineInstagram size={"25px"} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Term;
