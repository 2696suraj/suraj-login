import React, {useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css";



import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


import "./index.css";

const AboutFiveComponent = () => {

  useEffect(() => {
    AOS.init({duration : 1500})
  }, [])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1200, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      showDots: false,
    },
    mobile: {
      breakpoint: { max: 594, min: 0 },
      items: 1,
    },
  };



  return (
    <div className="AboutFiveComponent-workshowcase-bg-co">
      <div className="workshowcase-card-co">
        <div data-aos="flip-right" className="workshowcase-text-icon-co">
          <div className="workshowcase-text-icon-co-text-co">
            <p className="workshowcase-text-icon-co-text-co-pragraph-class">
              PROFESSIONAL PEOPLE
            </p>
            <p   className="workshowcase-text-icon-co-text-co-heding-class">
              MEET THE TEAM{" "}
            </p>
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
              <img
                src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteam-img-1.d605f86a.jpg&w=640&q=75"
                alt="loding"
                className="workshow-slider-image-class"
              />
               <p className="AboutFiveComponent-workshow-slider-image-co-para-first">CHRISTINA WILLS</p>
               <p className="AboutFiveComponent-workshow-slider-image-co-para-second">speaker</p>
            </div>
            <div className="workshow-slider-image-co">
              <img
                src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteam-img-2.bf2772b7.jpg&w=640&q=75"
                alt="loding"
                className="workshow-slider-image-class"
              />
               <p className="AboutFiveComponent-workshow-slider-image-co-para-first">CHRISTINA WILLS</p>
               <p className="AboutFiveComponent-workshow-slider-image-co-para-second">speaker</p>
            </div>
            <div className="workshow-slider-image-co">
              <img
                src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteam-img-3.dc5335d7.jpg&w=640&q=75"
                alt="loding"
                className="workshow-slider-image-class"
              />
               <p className="AboutFiveComponent-workshow-slider-image-co-para-first">CHRISTINA WILLS</p>
               <p className="AboutFiveComponent-workshow-slider-image-co-para-second">speaker</p>
            </div>
            <div className="workshow-slider-image-co">
              <img
                src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteam-img-5.133932ab.jpg&w=640&q=75"
                alt="loding"
                className="workshow-slider-image-class"
              />
               <p className="AboutFiveComponent-workshow-slider-image-co-para-first">CHRISTINA WILLS</p>
               <p className="AboutFiveComponent-workshow-slider-image-co-para-second">speaker</p>
            </div>
          
        </Carousel>
      </div>
    </div>
  );
};

export default AboutFiveComponent;
