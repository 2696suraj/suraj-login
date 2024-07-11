import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { IoLogoYoutube } from "react-icons/io5";
import "./index.css";

const WrkeVedioComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="workvideo-bg-co">
      <div className="workvideo-card-co">
        <div data-aos="flip-left" className="workvideo-text-co">
          <p className="workvideo-text-co-pargraph">ONE MINUTE VIDEO</p>
          <h1 className="workvideo-text-co-heding">WATCH VIDEO WORK</h1>
        </div>
        <div data-aos="flip-right" className="workvideo-video-co">
          <a haref="https://www.youtube.com/embed/4K6Sh1tsAW4">
            <IoLogoYoutube className="workvideo-icon-class" />
          </a>
        </div>
        <div className="workvideo-number-bg-co">
          <div className="workvideo-number-co">
            <p className="workvideo-number-co-paragraph">GET ESTIMATE</p>
            <h1 className="workvideo-number-co-heding">666 888 000</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WrkeVedioComponent;
