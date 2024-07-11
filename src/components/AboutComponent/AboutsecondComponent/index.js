import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { IoMdCheckmark } from "react-icons/io";

import { CgWebsite } from "react-icons/cg";

import "./index.css";

const AboutsecondComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 300 });
  }, []);

  return (
    <div className="AboutsecondComponent-disitalagency-bg-co">
      <div className="disitalagency-card-co">
        <div  className="disitalagence-text-co">
          <p className="disitalagence-text-co-first-pargraph">GET TO KNOW US</p>
          <h1 className="disitalagence-text-co-second-pargraph">
            OUR MISSION IS TO BECOME THE BEST AGENCY
          </h1>
          <p className="disitalagence-text-co-third-pargraph">
            We dig deep to understand your businesss target audience and market
            landscape.
          </p>
          <div className="digital-agency-flex-text-bg-co">
            <p className="digital-agency-flex-text-bg-co-first-co-color-co-paragraph-second-class">
              Stay up to date with the latest technological advancements.
            </p>
          </div>

          <button className="digitalagancy-right-icon-and-paragraph-co-button-class">
            DISCOVER MORE
          </button>
        </div>

        <div  className="disitalagence-image-co">
          <div className="disitalagence-image-co-first-image-co">
            <img
              src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-img-6.ebaacd1d.jpg&w=640&q=75"
              alt="loding"
              className="disitalagence-image-co-first-image-class"
            />
          </div>
          <div className="disitalagence-image-co-second-second-image-co">
            <div className="disitalagence-image-co-second-image-class">
              <h1  className="AboutsecondComponent-disitalagence-image-co-second-image-class-heding">
                WE'RE COMMITTED TO TRUSTED AGENCY{" "}
              </h1>
              <p className="AboutsecondComponent-disitalagence-image-co-second-image-class-paragraph">GET STARTED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutsecondComponent;
