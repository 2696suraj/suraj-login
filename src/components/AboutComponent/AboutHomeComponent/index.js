import React, { useContext } from "react";
import { useContextva } from "../../../App";
import NavbarComponent from "../../NavbarComponent";
import AboutFirstComponent from "../AboutFirstComponent";
import AboutsecondComponent from "../AboutsecondComponent";
import AboutThirdComponent from "../AboutThirdComponent";
import AboutFourthComponent from "../AboutFourthComponent";
import AboutFiveComponent from "../AboutFiveComponent";
import IconeImagesComponent from "../../HomeBgComponent/IconeImagesComponent";
import FooterComponent from "../../HomeBgComponent/FooterComponent";
import "./index.css";

const AboutHomeComponent = () => {
  const { inStatePathChangeFuntion } = useContext(useContextva);

  return (
    <div className="about-Home-bg-co">
      <div className="about-home-card-co">
        <NavbarComponent path={"ABOUT"} />
        <AboutFirstComponent />
        <AboutsecondComponent />
        <AboutThirdComponent />
        <AboutFourthComponent />
        <AboutFiveComponent />
        <IconeImagesComponent />
        <FooterComponent />
      </div>
    </div>
  );
};

export default AboutHomeComponent;
