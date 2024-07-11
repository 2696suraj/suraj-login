import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { IoMdCheckmark } from "react-icons/io";

import "./index.css";

const ServicesThirdComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 300 });
  }, []);

  return (
    <div className="ServicesThirdComponent-bg-co">
      <div className="disitalagency-card-co">
        <div className="disitalagence-image-co">
          <div className="disitalagence-image-co-first-image-co">
            <img
              src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-img-7.4aa165f6.jpg&w=640&q=75"
              alt="loding"
              className="disitalagence-image-co-first-image-class"
            />
          </div>
        </div>

        <div className="disitalagence-text-co">
          <p className="disitalagence-text-co-first-pargraph">
            ALL CATEGORIES LIST
          </p>
          <h1 className="disitalagence-text-co-second-pargraph">
            WE PROVIDE A BEST SERVICES{" "}
          </h1>
          <p className="disitalagence-text-co-third-pargraph">
            There are many variations of pass of lorem ipsum ipsum avaiable but
            the majority have suffered alteration in some form
          </p>
          <div className="digital-agency-flex-text-bg-co">
            <div className="digital-agency-flex-text-bg-co-first-co">
              <div className="digital-agency-flex-text-bg-co-first-co-color-heding-co">
                <p className="digital-agency-flex-text-bg-co-first-co-color-co-paragraph-class">
                  injected humour randomiesed words which dont look event
                  slighly belive you need to be aure isn't anything embarrassing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesThirdComponent;
