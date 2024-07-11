import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

import "./index.css";
import FooterComponent from "../../HomeBgComponent/FooterComponent";

const ContactSecondComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 300 });
  }, []);

  return (
    <div className="ContactSecondComponent-disitalagency-bg-co">
      <div className="disitalagency-card-co">
        <div data-aos="flip-right" className="disitalagence-text-co">
          <p className="disitalagence-text-co-first-pargraph">
            CONTACT WITH US
          </p>
          <h1 className="disitalagence-text-co-second-pargraph">
            SPEAK WITH OUR CONSULTANT
          </h1>

          <div className="ContactSecondComponent-disitalagence-text-co-icon-and-name-bg-co">
            <div className="ContactSecondComponent-disitalagence-text-co-icon-and-name-bg-co-icon-co">
              <IoIosCall className="ContactSecondComponent-disitalagence-text-co-icon-and-name-bg-co-icon-co-icon-class" />
            </div>
            <div className="ContactSecondComponent-disitalagence-text-co-icon-and-name-bg-co-name-co">
              <p className="ContactSecondComponent-disitalagence-text-co-icon-and-name-bg-co-name-co-first-para">
                CALL NAME
              </p>
              <p className="ContactSecondComponent-disitalagence-text-co-icon-and-name-bg-co-name-co-second-para">
                92 666 888 000
              </p>
            </div>
          </div>
          <div className="ContactSecondComponent-disitalagence-text-co-icon-and-name-bg-co">
            <div className="ContactSecondComponent-disitalagence-text-co-icon-and-name-bg-co-icon-co">
              <IoIosCall className="ContactSecondComponent-disitalagence-text-co-icon-and-name-bg-co-icon-co-icon-class" />
            </div>
            <div className="ContactSecondComponent-disitalagence-text-co-icon-and-name-bg-co-name-co">
              <p className="ContactSecondComponent-disitalagence-text-co-icon-and-name-bg-co-name-co-first-para">
                CALL NAME
              </p>
              <p className="ContactSecondComponent-disitalagence-text-co-icon-and-name-bg-co-name-co-second-para">
                92 666 888 000
              </p>
            </div>
          </div>
          <div className="ContactSecondComponent-disitalagence-text-co-icon-and-name-bg-co">
            <div className="ContactSecondComponent-disitalagence-text-co-icon-and-name-bg-co-icon-co">
              <IoIosCall className="ContactSecondComponent-disitalagence-text-co-icon-and-name-bg-co-icon-co-icon-class" />
            </div>
            <div className="ContactSecondComponent-disitalagence-text-co-icon-and-name-bg-co-name-co">
              <p className="ContactSecondComponent-disitalagence-text-co-icon-and-name-bg-co-name-co-first-para">
                CALL NAME
              </p>
              <p className="ContactSecondComponent-disitalagence-text-co-icon-and-name-bg-co-name-co-second-para">
                92 666 888 000
              </p>
            </div>
          </div>
        </div>

        <form className="disitalagence-image-co-form-co">
          <div className="disitalagence-image-co-form-co-first-input-co">
            <input
              placeholder="your name"
              type="text"
              className="disitalagence-image-co-form-co-first-input-co-input"
            />
            <input
              placeholder="your name"
              type="text"
              className="disitalagence-image-co-form-co-first-input-co-input"
            />
          </div>
          <div className="disitalagence-image-co-form-co-first-input-co">
            <input
              placeholder="your name"
              type="text"
              className="disitalagence-image-co-form-co-first-input-co-input"
            />
            <input
              placeholder="your name"
              type="text"
              className="disitalagence-image-co-form-co-first-input-co-input"
            />
          </div>
          <input
            placeholder="your name"
            type="text"
            className="disitalagence-image-co-form-co-first-input-co-input"
          />

          <button className="disitalagence-image-co-form-co-first-input-co-input-button">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSecondComponent;
