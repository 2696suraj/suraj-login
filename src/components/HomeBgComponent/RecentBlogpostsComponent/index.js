import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineMessage } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa6";

import "./index.css";

const RecentBlogpostsComponent = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1200, min: 1100 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1100, min: 780 },
      items: 2,
      showDots: false,
    },
    mobile: {
      breakpoint: { max: 780, min: 0 },
      items: 1,
    },
  };

  const funtionofrecentblogscard = () => {
    return <div className="recentblogs-slider-card-bg-co">
                <div className="recentblogs-slider-card-bg-card-co">
                  <div className="recentblogs-slider-card-bg-card-co-img-co">
                    <div className="recentblogs-slider-card-bg-card-co-img-co-text-co">
                      <p className="recentblogs-slider-card-bg-card-co-img-co-text-co-paragraph">
                        APRIL 07, 2023
                      </p>
                    </div>
                    <div className="recentblogs-slider-card-bg-card-co-text-co">
                      <div className="recentblogs-slider-card-bg-card-co-text-co-icon-namw-co">
                        <div className="recentblogs-slider-card-bg-card-co-text-co-icon-namw-co">
                          <CgProfile className="recentblogs-slider-card-bg-card-co-text-co-icon-namw-co-icon" />
                          <p className="recentblogs-slider-card-bg-card-co-text-co-icon-namw-co-paragraph">
                            BY ADMIN /
                          </p>
                        </div>
                        <div className="recentblogs-slider-card-bg-card-co-text-co-icon-namw-co">
                          <MdOutlineMessage className="recentblogs-slider-card-bg-card-co-text-co-icon-namw-co-icon" />
                          <p className="recentblogs-slider-card-bg-card-co-text-co-icon-namw-co-paragraph">
                            BY ADMIN /
                          </p>
                        </div>
                      </div>
                      <p className="recentblogs-slider-card-bg-card-co-paragraph">
                        EVERYTHING TO KEEP IN MIND WHEN DESIDNING
                      </p>
                      <div className="recentblogs-slider-card-bg-card-co-bottom-icon-and-text-co">
                        <p className="recentblogs-slider-card-bg-card-co-bottom-icon-and-text-co">
                          READ MORE{" "}
                        </p>
                        <FaGreaterThan className="recentblogs-slider-card-bg-card-co-bottom-icon-and-text-co-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  }
  return (
    <div  className="recentblogs-bg-co">
      <div className="recentblogs-card-co">
       
        <div className="recentblogs-text-and-slider-bg-co">
          <div className="recentblogs-text-and-slider-card-co">
            <div data-aos="flip-right"  className="recentblogs-text-and-slider-card-co-text-co">
              <p className="recentblogs-text-and-slider-card-co-text-co-FIRST-PARA">
                RECENT BLOG POSTS
              </p>
              <h1 className="recentblogs-text-and-slider-card-co-text-co-second-heding">
                LATEST NEWS & ARTICLES
              </h1>
              <p className="recentblogs-text-and-slider-card-co-text-co-third-para">
                DISCOVER HOW DIGITAL AGENCIES ASSIST BUSINESSES IN SETING IN
                SETING UP UP COMMEERCE PLATFORMS ONLINE SELLING
              </p>
              <div className="recentblogs-text-and-slider-bg-co-icons-bg-co">
                <div className="recentblogs-text-and-slider-bg-co-icons-co">
                  <FaArrowLeft className="recentblogs-text-and-slider-bg-co-icons-co-icon-class"/>
                </div>
                <div className="recentblogs-text-and-slider-bg-co-icons-co">
                  <FaArrowRight className="recentblogs-text-and-slider-bg-co-icons-co-icon-class"/>
                </div>
              </div>
            </div>
              
      

          <Carousel
          className="recentblogs-slider-containerte-se"
          style={{ height: "300" }}
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
                {funtionofrecentblogscard()}
            </div>
            <div>
                {funtionofrecentblogscard()}
            </div>
            <div>
                {funtionofrecentblogscard()}
            </div>
         
        </Carousel>     
        </div>
          </div>
        </div>

    </div>
  );
};

export default RecentBlogpostsComponent;
