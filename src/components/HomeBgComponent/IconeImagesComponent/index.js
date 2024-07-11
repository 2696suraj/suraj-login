import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./index.css";

const IconeImagesComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2000, min:  980 },
      items: 5,
    },

 
    desktop: {
      breakpoint: { max: 980, min: 564 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 564, min: 320 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 320, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="iconimageco-bg-co">
      <div className="iconimageco-card-co">
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
          <div>
            <div className="iconimage-slider-image-co">
              <img
                src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrand-1.485e94cd.png&w=128&q=75"
                className="iconimage-slider-image-class"
                alt="loding"
              />
            </div>
          </div>
          <div>
            <div className="iconimage-slider-image-co">
              <img
                src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrand-5.5cd913b4.png&w=96&q=75"
                className="iconimage-slider-image-class"
                alt="loding"
              />
            </div>
          </div>
          <div>
            <div className="iconimage-slider-image-co">
              <img
                src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrand-4.edf08d67.png&w=128&q=75"
                className="iconimage-slider-image-class"
                alt="loding"
              />
            </div>
          </div>
          <div>
            <div className="iconimage-slider-image-co">
              <img
                src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrand-3.ccb28658.png&w=128&q=75"
                className="iconimage-slider-image-class"
                alt="loding"
              />
            </div>
          </div>
          <div>
            <div className="iconimage-slider-image-co">
              <img
                src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrand-2.770dd0b6.png&w=128&q=75"
                className="iconimage-slider-image-class"
                alt="loding"
              />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default IconeImagesComponent;
