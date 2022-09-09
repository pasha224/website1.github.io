import React, { useEffect } from "react";
import "./Header.css";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import phoneHeader from "../../assets/phone-header-bg.png";
import { BsMouse } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>The world's leading</span>
            <span>cross-platform secure</span>
            <span>messaging system</span>
          </h1>
          <p className="u-text-small">
            Ixiono is a Coherent Blockchain Solutions To Cater Your Business Needs. 
            Advance macine learining<br></br>
            Avant-Grade cloud Solutions

          </p>
          <div className="header-cta">
            <Button text={"Get Started"} btnClass={"btn-dark"} href={"https://www.ixiono.com/"} />
            <Button text={"How It Works"} btnClass={"btn-light"} href={"#"} />
          </div>
        </div>
        <div className="header-right" data-aos="fade-left">
          <img src={phoneHeader} alt="phone" />
        </div>
      </div>
      <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div>
    </section>
  );
};

export default Header;