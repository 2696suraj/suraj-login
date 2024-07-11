import React, {useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css";

import { BiLike } from "react-icons/bi";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { IoHeartDislikeOutline } from "react-icons/io5";

import "./index.css";

const FreeConsulatationComponent = () => {
  useEffect(() => {
    AOS.init({duration : 1000})
  }, [])

  return (
    <div  className="free-consula-bg-co">
      <div className="free-consula-card-co">
        <div className="free-consu-icon-paragraph-number-co">
          <div className="free-consu-icon-paragraph-number-co-icon-bg-co">
            <div className="free-consu-icon-paragraph-number-co-icon-co">
              <BiLike className="free-consu-icon-paragraph-number-co-icon-co-icon-class" />
            </div>
            <div className="free-consu-icon-paragraph-number-co-icon-co-se">
              <BiMessageRoundedDetail className="free-consu-icon-paragraph-number-co-icon-co-icon-class" />
            </div>
            <div className="free-consu-icon-paragraph-number-co-icon-co-te">
              <IoHeartDislikeOutline className="free-consu-icon-paragraph-number-co-icon-co-icon-class" />
            </div>
          </div>

          <div className="free-consu-number-paragraph-co">
            <div className="free-consu-number-co">
              <p className="free-consu-number-co-paragraph-class">
                GET A FREE CONSULTATION
              </p>
              <h1 className="free-consu-number-co-heding-class">
                666 888 0000
              </h1>
            </div>
            <div className="free-consu-paragraph-co">
              <p className="free-consu-paragraph-co-paragraph-class">
                Stay up-to-date with latest technological advancements.
              </p>
            </div>
          </div>
        </div>
        <div className="free-consu-paragraph-co-se">
              <p className="free-consu-paragraph-co-paragraph-class">
                Stay up-to-date with latest technological advancements.
              </p>
            </div>

        <div className="free-consu-button-co">
          <button className="free-consu-button-co-button-class">
            DISCOVER MORE
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default FreeConsulatationComponent;
