import React, { useEffect } from "react";
import AOS from "aos";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import WrkeVedioComponent from "../WrkeVedioComponent";
import "aos/dist/aos.css";

import "./index.css";

const WorkshowCaseComponent = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1200 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1200, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      showDots: false,
    },
    mobile: {
      breakpoint: { max: 774, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="workshowcase-bg-co">
      <div className="workshowcase-card-co">
        <div className="workshowcase-text-icon-co">
          <div className="workshowcase-text-icon-co-text-co">
            <p className="workshowcase-text-icon-co-text-co-pragraph-class">
              OUR RECENT WORK
            </p>
            <p className="workshowcase-text-icon-co-text-co-heding-class">
              WORK SHOWCASE{" "}
            </p>
          </div>
          <div className="workshowcase-text-icon-co-text-co-icon-co">
            <div className="workshowcase-text-icon-co-text-co-icon-co-first">
              <FaArrowLeft className="workshowcase-text-icon-co-text-co-icon-co-con-class" />
            </div>
            <div className="workshowcase-text-icon-co-text-co-icon-co-first">
              <FaArrowRight className="workshowcase-text-icon-co-text-co-icon-co-con-class" />
            </div>
          </div>
        </div>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            "tablet",
            "mobile",
            "superLargeDesktop",
            "desktop",
          ]}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
        >
          <div className="workshow-slider-image-co">
            {" "}
            <img
              src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject-img-1.f3968aeb.jpg&w=640&q=75"
              alt="loding"
              className="workshow-slider-image-class"
            />
          </div>
          <div className="workshow-slider-image-co">
            {" "}
            <img
              src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject-img-2.bffc3201.jpg&w=640&q=75"
              alt="loding"
              className="workshow-slider-image-class"
            />
          </div>
          <div className="workshow-slider-image-co">
            {" "}
            <img
              src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject-img-3.901c6f79.jpg&w=640&q=75"
              alt="loding"
              className="workshow-slider-image-class"
            />
          </div>
          <div className="workshow-slider-image-co">
            {" "}
            <img
              src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject-img-4.cabbcf52.jpg&w=640&q=75"
              alt="loding"
              className="workshow-slider-image-class"
            />
          </div>
        </Carousel>
      </div>
      <WrkeVedioComponent />
    </div>
  );
};

export default WorkshowCaseComponent;
