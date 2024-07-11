import React, {useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPlus } from "react-icons/fa6";



import { IoMdCheckmark } from "react-icons/io";

import "./index.css";

const AboutFourthComponent = () => {

  useEffect(() => {
    AOS.init({duration : 1000, offset : 300})
  }, [])

  return (
    <div   className="AboutFourthComponent-disitalagency-bg-co">
      <div className="disitalagency-card-co">
     
      <div className="disitalagence-text-co">
          <p className="disitalagence-text-co-first-pargraph">ALL CATEGORIES LIST</p>
          <h1 className="disitalagence-text-co-second-pargraph">
           WHY CHOOSE OUR AGENCY
          </h1>
          <p className="disitalagence-text-co-third-pargraph">
            A didital agency is a creative and strategic company that
            specializes in providing a range of online services to help
          
          </p>
         
          <div className="digitalagancy-right-icon-and-paragraph-co">
            <IoMdCheckmark className="digitalagancy-right-icon-and-paragraph-co-icon-class" />

            <p className="digitalagancy-right-icon-and-paragraph-co-pragraph-class">
              Refresing to get such a personal touch 
            </p>
          </div>
          <div className="digitalagancy-right-icon-and-paragraph-co">
            <IoMdCheckmark className="digitalagancy-right-icon-and-paragraph-co-icon-class" />

            <p className="digitalagancy-right-icon-and-paragraph-co-pragraph-class">
              Duis ayte irute dolor in reprehenderit in valuptate
            </p>
          </div>
          <div className="digitalagancy-right-icon-and-paragraph-co">
            <IoMdCheckmark className="digitalagancy-right-icon-and-paragraph-co-icon-class" />

            <p className="digitalagancy-right-icon-and-paragraph-co-pragraph-class">
              Velit ese cilum dolore eu fugir nulla pariatur
            </p>
          </div>
         
        </div>

        <div className="disitalagence-text-co">
            <div className="AboutFourthComponent-disitalagence-text-co-card-first">
            <p className="disitalagence-text-co-first-pargraph">HOW TO PROCESS FUNCTION FOR DEVELOPMENT?</p>
         
         <p className="disitalagence-text-co-third-pargraph">
           A didital agency is a creative and strategic company that
           specializes in providing a range of online services to help
           businesss estabilsh a strong and effective digital presence{" "}
         </p>
            </div>
          
         
          <div className="AboutFourthComponent-digitalagancy-right-icon-and-paragraph-co">

            <p className="digitalagancy-right-icon-and-paragraph-co-pragraph-class">
              Digital Marketing Strategies
            </p>
            <FaPlus className="digitalagancy-right-icon-and-paragraph-co-icon-class" />

          </div>
          <div className="AboutFourthComponent-digitalagancy-right-icon-and-paragraph-co">

<p className="digitalagancy-right-icon-and-paragraph-co-pragraph-class">
  Digital Marketing Strategies
</p>
<FaPlus className="digitalagancy-right-icon-and-paragraph-co-icon-class" />

</div>
         
         
        </div>
      </div>
    </div>
  );
};

export default AboutFourthComponent;
