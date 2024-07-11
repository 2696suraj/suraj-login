import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./index.css";
import FooterComponent from "../../HomeBgComponent/FooterComponent";

const ProjectsThirdComponentCatagaryListimage = [
  {
    imageUrl:
      "https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject-img-6.e17eaf7f.jpg&w=640&q=75",
    catagaryid: "GRAPHIC",
    id: 1,
  },
  {
    imageUrl:
      "https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject-img-10.1cc64b9b.jpg&w=640&q=75",
    catagaryid: "GRAPHIC",
    id: 2,
  },
  {
    imageUrl:
      "https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject-img-13.d3a0300f.jpg&w=384&q=75",
    catagaryid: "GRAPHIC",
    id: 3,
  },
  {
    imageUrl:
      "https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject-img-5.a552bbbd.jpg&w=640&q=75",
    catagaryid: "WEB DESIGN",
    id: 4,
  },
  {
    imageUrl:
      "https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject-img-12.6487c86e.jpg&w=384&q=75",
    catagaryid: "WEB DESIGN",
    id: 5,
  },
  {
    imageUrl:
      "https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject-img-7.16368f29.jpg&w=640&q=75",
    catagaryid: "WEB DEVELOPMENT",
    id: 6,
  },
  {
    imageUrl:
      "https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject-img-9.296a5795.jpg&w=640&q=75",
    catagaryid: "WEB DEVELOPMENT",
    id: 7,
  },
  {
    imageUrl:
      "https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject-img-8.026ec827.jpg&w=640&q=75",
    catagaryid: "NETWORKING",
    id: 8,
  },
  {
    imageUrl:
      "https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject-img-11.656091d2.jpg&w=384&q=75",
    catagaryid: "NETWORKING",
    id: 9,
  },
];

const ProjectsThirdComponent = () => {
  const [catagary, catagaryusestatecall] = useState({
    catagaryClickValue: 1,
    ProjectsThirdComponentImageList: ProjectsThirdComponentCatagaryListimage,
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const ProjectsThirdComponentCatagaryList = [
    { name: "ALL", id: 1 },
    { name: "GRAPHIC", id: 2 },
    { name: "WEB DESIGN", id: 3 },
    { name: "WEB DEVELOPMENT", id: 4 },
    { name: "NETWORKING", id: 5 },
  ];

  const catagarychangefuntion = (id, name) => {
    if (id === 1) {
      catagaryusestatecall({
        catagaryClickValue: id,
        ProjectsThirdComponentImageList:
          ProjectsThirdComponentCatagaryListimage,
      });
    } else {
      const catagarychangefuntionlist =
        ProjectsThirdComponentCatagaryListimage.filter((cc) =>
          cc.catagaryid === name ? cc : ""
        );
      console.log(catagarychangefuntionlist);
      catagaryusestatecall({
        catagaryClickValue: id,
        ProjectsThirdComponentImageList: catagarychangefuntionlist,
      });
    }
  };

  return (
    <div className="ProjectsThirdComponent-bg-co">
      <div className="ProjectsThirdComponent-card-co">
        <div className="ProjectsThirdComponent-card-co-catagary-co">
          {ProjectsThirdComponentCatagaryList.map((cc) => {
            const classNamecatagary =
              cc.id === catagary.catagaryClickValue
                ? "ProjectsThirdComponent-card-co-catagary-co-redcolor-paragraph"
                : "ProjectsThirdComponent-card-co-catagary-co-paragraph";
            const catagarychangefuntionin = () => {
              catagarychangefuntion(cc.id, cc.name);
            };
            return (
              <p
                className={classNamecatagary}
                key={cc.id}
                onClick={catagarychangefuntionin}
              >
                {cc.name}
              </p>
            );
          })}
        </div>
        <div className="ProjectsThirdComponent-card-co-images-bg-co">
          {catagary.ProjectsThirdComponentImageList.map((cc) => {
            return (
              <div className="ProjectsThirdComponent-card-co-images-bg-co-image-co">
                <img
                  src={cc.imageUrl}
                  alt="loding"
                  className="ProjectsThirdComponent-card-co-images-bg-co-image-co-image-class"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsThirdComponent;
