import { FaSearch } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbBrandPicsart } from "react-icons/tb";

import "./index.css";

const FooterComponent = () => {
  return (
    <div  className="footer-bg-co">
      <div className="footer-card-co">
        <div className="footer-card-co-flex-co-first">
          <div className="footer-card-co-first-text-co">
            <img
              src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.b3dd6246.png&w=256&q=75"
              alt="loding"
              className="footer-card-co-first-text-co-image-class"
            />
            <p className="footer-card-co-first-text-co-paragraph-class">
              There are many veri of pass of lore ipsum availab but the majority
              have suffered in some form by injected humaour or word{" "}
            </p>
            <div className="footer-card-co-first-text-co-icon-co">
              <TbBrandPicsart className="footer-card-co-first-text-co-icon-co-class" />
              <VscThreeBars className="footer-card-co-first-text-co-icon-co-class" />
              <FaFacebookF className="footer-card-co-first-text-co-icon-co-class" />
              <FaInstagram className="footer-card-co-first-text-co-icon-co-class" />
            </div>
          </div>
          <div className="footer-card-co-thirs-text-co">
            <h1 className="footer-card-co-thirs-text-co-heding">Links</h1>
            <p className="footer-card-co-thirs-text-co-paragraph">
              Our Services <br /> Meet Our Team <br />
              Our Portfolia <br />
              Contact Help
            </p>
          </div>
          <div className="footer-card-co-second-text-co">
            <h1 className="footer-card-co-second-text-co-top-heding">
              Contact
            </h1>
            <p className="footer-card-co-second-text-co-paragraph">
              86 Road Broklyn Street, 600 New York, USA
            </p>
            <div className="footer-card-co-second-text-co-icon-bg-co">
              <div className="footer-card-co-second-text-co-icon-co">
                <FaInstagram className="footer-card-co-first-text-co-icon-co-class-se" />

                <p className="footer-card-co-second-text-co-icon-co-paragraph">
                  needhelp@company.com
                </p>
              </div>
              <div className="footer-card-co-second-text-co-icon-co">
                <FaInstagram className="footer-card-co-first-text-co-icon-co-class-se" />

                <p className="footer-card-co-second-text-co-icon-co-paragraph">
                  needhelp@company.com
                </p>
              </div>
            </div>
          </div>

          <div className="footer-card-co-fourth-text-co">
            <h1 className="footer-card-co-fourth-text-co-heding">Newsletter</h1>
            <p className="footer-card-co-fourth-text-co-paragraph">
              Our Services Meet Our Team Our Portfolia Contact Help
            </p>
            <div className="footer-card-co-fourth-text-co-input-co">
              <input
                placeholder="Email Address"
                className="footer-card-co-fourth-text-co-input-co-input-class"
              />
              <button className="footer-card-co-fourth-text-co-input-co-button-class">
                SEND
              </button>
            </div>
          </div>
        </div>

        <div className="footer-card-co-flex-co-second">
          <div className="footer-card-co-thirs-text-co-se">
            <h1 className="footer-card-co-thirs-text-co-heding">Links</h1>
            <p className="footer-card-co-thirs-text-co-paragraph">
              Our Services <br /> Meet Our Team <br />
              Our Portfolia <br />
              Contact Help
            </p>
          </div>
          <div className="footer-card-co-fourth-text-co-se">
            <h1 className="footer-card-co-fourth-text-co-heding">Newsletter</h1>
            <p className="footer-card-co-fourth-text-co-paragraph">
              Our Services Meet Our Team Our Portfolia Contact Help
            </p>
            <div className="footer-card-co-fourth-text-co-input-co">
              <input
                placeholder="Email Address"
                className="footer-card-co-fourth-text-co-input-co-input-class"
              />
              <button className="footer-card-co-fourth-text-co-input-co-button-class">
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
