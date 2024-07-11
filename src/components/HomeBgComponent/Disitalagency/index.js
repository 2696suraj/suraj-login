import React, {useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css";



import { IoMdCheckmark } from "react-icons/io";

import "./index.css";

const Disitalagency = () => {

  useEffect(() => {
    AOS.init({duration : 1000, offset : 300})
  }, [])

  return (
    <div   className="disitalagency-bg-co">
      <div className="disitalagency-card-co">
        <div  className="disitalagence-image-co">
          <div className="disitalagence-image-co-first-image-co">
            <img
              src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-img-1.65fd6464.jpg&w=640&q=75"
              alt="loding"
              className="disitalagence-image-co-first-image-class"
            />
          </div>
          <div className="disitalagence-image-co-second-second-image-co">
            <img
              src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-img-2.3229e5e1.jpg&w=640&q=75"
              alt="loding"
              className="disitalagence-image-co-second-image-class"
            />
          </div>
          <div className="disitalagence-image-co-second-image-co-second-img-co">
            <img
              className="disitalagence-image-co-second-image-co-second-img-co-img-class"
              src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-icon.80572a3d.png&w=64&q=75"
              alt="loding"
            />
          </div>
        </div>

        <div className="disitalagence-text-co">
          <p className="disitalagence-text-co-first-pargraph">GET TO KNOW US</p>
          <h1 className="disitalagence-text-co-second-pargraph">
            WELCOME TO DIGITAL AGENCY
          </h1>
          <p className="disitalagence-text-co-third-pargraph">
            A didital agency is a creative and strategic company that
            specializes in providing a range of online services to help
            businesss estabilsh a strong and effective digital presence{" "}
          </p>
          <div className="digital-agency-flex-text-bg-co">
            <div className="digital-agency-flex-text-bg-co-first-co">
              <div className="digital-agency-flex-text-bg-co-first-co-color-heding-co">
                <div className="digital-agency-flex-text-bg-co-first-co-color-co"></div>
                <p className="digital-agency-flex-text-bg-co-first-co-color-co-paragraph-class">
                  The Best Services
                </p>
              </div>
              <p className="digital-agency-flex-text-bg-co-first-co-color-co-paragraph-second-class">
                Stay up to date with the latest technological advancements.
              </p>
            </div>
            <div className="digital-agency-flex-text-bg-co-first-co">
              <div className="digital-agency-flex-text-bg-co-first-co-color-heding-co">
                <div className="digital-agency-flex-text-bg-co-first-co-color-co"></div>
                <p className="digital-agency-flex-text-bg-co-first-co-color-co-paragraph-class">
                  EXper Designers
                </p>
              </div>
              <p className="digital-agency-flex-text-bg-co-first-co-color-co-paragraph-second-class">
                Stay up to date with the latest technological advancements.
              </p>
            </div>
          </div>
          <div className="digitalagancy-right-icon-and-paragraph-co">
            <IoMdCheckmark className="digitalagancy-right-icon-and-paragraph-co-icon-class" />

            <p className="digitalagancy-right-icon-and-paragraph-co-pragraph-class">
              Digital Marketing Strategies
            </p>
          </div>
          <div className="digitalagancy-right-icon-and-paragraph-co">
            <IoMdCheckmark className="digitalagancy-right-icon-and-paragraph-co-icon-class" />

            <p className="digitalagancy-right-icon-and-paragraph-co-pragraph-class">
              Digital Marketing Strategies
            </p>
          </div>
          <div className="digitalagancy-right-icon-and-paragraph-co">
            <IoMdCheckmark className="digitalagancy-right-icon-and-paragraph-co-icon-class" />

            <p className="digitalagancy-right-icon-and-paragraph-co-pragraph-class">
              Digital Marketing Strategies
            </p>
          </div>
          <button className="digitalagancy-right-icon-and-paragraph-co-button-class">
            DISCOVER MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Disitalagency;
