import { Component } from "react";

import Nav from "../../Layouts/Nav/Nav";
import "./index.css";
import CarouselBootstrap from "../../components/Carousel/CarouselBootstrap";
import About from "../../components/About/About";
import Services from "../../components/ServicesSection/Services";
import Portfolio from "../../components/Portfolio/Portfolio";
import Term from "../../components/Terms/Term";
import ContactUS from "../../components/ContactUs/ContactUS";
import Footer from "../../Layouts/Nav/Footer/Footer";
class Home extends Component{
    render(){
       return (
       <div className="home"> 
            <CarouselBootstrap />
            <About />
            <Services />
        </div>);

    }
}

export default Home;