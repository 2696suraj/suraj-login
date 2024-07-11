import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineMessage } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa6";
import { ImageDiv } from "./BlogsSecondComponentStyleFile";
import "./index.css";

const BlogsSecondComponent = () => {
  const ListOfBlogsSecondComponent = [
    {
      imageUrl:
        "https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-img-9.a0d12080.jpg&w=384&q=75",
      id: 1,
    },
    {
      imageUrl:
        "https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-img-10.51719b02.jpg&w=384&q=75",
      id: 2,
    },
    {
      imageUrl:
        "https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-img-11.7412cfe1.jpg&w=384&q=75",
      id: 3,
    },
    {
      imageUrl:
        "https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-img-6.7939471d.jpg&w=384&q=75",
      id: 4,
    },
    {
      imageUrl:
        "https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-img-7.e67bef7c.jpg&w=384&q=75",
      id: 5,
    },
    {
      imageUrl:
        "https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-img-8.b4512f66.jpg&w=384&q=75",
      id: 6,
    },
  ];

  const FuntionOfBlogsSecondComponentCard = (cc) => {
    return (
      <div className="recentblogs-slider-card-bg-co-blogssecondComponent">
        <div className="recentblogs-slider-card-bg-card-co">
          <div className="recentblogs-slider-card-bg-card-co-img-co">
            <ImageDiv
              imageurl={cc.imageUrl}
              iclassName="recentblogs-slider-card-bg-card-co-img-co-text-co"
            >
              <p className="recentblogs-slider-card-bg-card-co-img-co-text-co-paragraph">
                APRIL 07, 2023
              </p>
            </ImageDiv>
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
    );
  };
  return (
    <div className="Blogssecondco-bg-co">
      <div className="Blogssecondco-card-co">
        {ListOfBlogsSecondComponent.map((cc) =>
          FuntionOfBlogsSecondComponentCard(cc)
        )}
      </div>
    </div>
  );
};

export default BlogsSecondComponent;
