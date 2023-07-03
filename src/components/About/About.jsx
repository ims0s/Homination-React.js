import React from "react";
import img0 from "../../images/depositphotos_190814036-stock-photo-construction-work-finishing-work-in.jpg";
import img1 from "../../images/download.png";
import img2 from "../../images/abstract-logo-flame-shape_1043-44.avif";
import img3 from "../../images/45068479-2f5a-4484-838c-54c4e0e9cb4f.png";
import { Link } from "react-router-dom";
const About = () => {
return (
<>
    {/* <!-- about section starts --> */}
    <section id="about" className="about section-padding">
    <div className="container">
        <div className="row">
        <div className="col-lg-6 col-md-12 col-12">
            <div className="about-imge">
            <img src={img0} alt="" className="img-fluid" />
            </div>
        </div>
        <div className="col-lg-6 col-md-11 col-12 ps-lg-5 mt-md-5">
            <div className="about-text">
            <h2>
                We Provide the Best Quality <br />
                Services Ever
            </h2>
            <p>
            we take pride in our unwavering commitment to excellence, 
            delivering the best quality services that surpass expectations, 
            and setting the benchmark for superior craftsmanship in every project we undertake.
            </p>
            </div>
        </div>
        </div>
    </div>
    </section>
    {/* about section Ends */}
    <section className="cards" id="#services">
    <h2 className="title">Work With</h2>
    <div className="content row">
        <div className="about-card col-md-5">
        <img src={img1} />
        <div className="info">
            <h3>MAZEED</h3>
            <p>worked with renova group from 1990</p>
        </div>
        </div>

        <div className="about-card col-7 col-4-12 col-lg-3">
        <img src={img2} />
        <div className="info">
            <h3>Bussness legend</h3>
            <p>
            We have works in comman in US and Spain in designing buildings
            </p>
        </div>
        </div>

        <div className="about-card col-12 col-md-12 col-lg-4">
        <img src={img3} />
        <div className="info">
            <h3>Renova Group</h3>
            <p>Joint agreement in finishes scince 2004</p>
        </div>
        </div>
    </div>
    </section>
</>
);
};

export default About;
