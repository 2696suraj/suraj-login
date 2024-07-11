import React, {useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css";

import { CgWebsite } from "react-icons/cg";
import FreeConsulatationComponent from "../FreeConsulatationComponent";

import "./index.css";

const CategoriseListComponent = () => {

  useEffect(() => {
    AOS.init({duration : 1000})
  }, [])
  
  return (
    <div className="Categori-bg-co">
      <div className="Categori-bg-card-co">
        <div  className="Categori-text-card-co">
          <div className="categori-all-text-co">
            <h3 className="categori-text-co-first-heding">
              ALL CATEGORIES LIST
            </h3>
            <h1 className="categori-text-co-second-heding">
              THE SERVICES WE'RE OFFERING
            </h1>
            <p className="categori-text-co-paragraph">
              There are many variations of passages of lorem ipsum available but
              the majority have suffered alteration in some form by injected
              humour.
            </p>
            <div className="categori-image-name-co">
              <div className="categori-text-co-image-co">
                <img
                  src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice-author.cfd14cea.png&w=128&q=75"
                  alt="loding"
                  className="categori-text-co-image-class"
                />
              </div>
              <p className="categari-text-co-name-paragraph">Jessica Brown</p>
            </div>
          </div>
        </div>
        <div  className="cards-catagary-bg-co">
          <div className="catagori-card-co">
            <CgWebsite className="categori-icon-class" />
            <p className="categori-icon-paragraph">WEBSITE DEVELOPMENT</p>
          </div>
          <div className="catagori-card-co">
            <CgWebsite className="categori-icon-class" />
            <p className="categori-icon-paragraph">WEBSITE DEVELOPMENT</p>
          </div>
          <div className="catagori-card-co">
            <CgWebsite className="categori-icon-class" />
            <p className="categori-icon-paragraph">WEBSITE DEVELOPMENT</p>
          </div>
          <div className="catagori-card-co">
            <CgWebsite className="categori-icon-class" />
            <p className="categori-icon-paragraph">WEBSITE DEVELOPMENT</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CategoriseListComponent;
