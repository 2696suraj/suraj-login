import React from "react";
import { Carousel } from "antd";

import NavbarComponent from "../../NavbarComponent";
import HomeTextComponent from "../HomeTextComponent";
import CategoriseListComponent from "../CategoriseListComponent";
import FreeConsulatationComponent from "../FreeConsulatationComponent";
import Disitalagency from "../Disitalagency";
import WorkshowCaseComponent from "../WorkshowCaseComponent";
import ClientTestimonlals from "../ClientTestimonlals";
import IconeImagesComponent from "../IconeImagesComponent";
import BusinessNeedsComponent from "../BusinessNeedsComponent";
import RecentBlogpostsComponent from "../RecentBlogpostsComponent";
import DeliverQualityComponent from "../DeliverQualityComponent";
import FooterComponent from "../FooterComponent";

import "./index.css";

const HomeComponent = () => {
  const contentStyle = {
    height: "160px",
    background: "#364d79",
    backgroundImage:
      "url('https://media.istockphoto.com/id/915160652/photo/man-freelancer-is-working-using-laptop-computer-at-home-office-freelance-lifestyle-workplace.jpg?s=612x612&w=0&k=20&c=YSJmc0Q2wNOczSZWwGjlZu9tt1M6APHnC0t8nViDNoc=')",
    height: "120vh",
    backgroundSize: "cover",
  };

  return (
    <div className="Home-bg-co">
      <NavbarComponent path={"HOME"}/>
      <div className="home-card-co">
        <HomeTextComponent />
      </div>
      <div>
      <CategoriseListComponent />
      <FreeConsulatationComponent />
      <Disitalagency />
      <WorkshowCaseComponent />

        <ClientTestimonlals />
        <IconeImagesComponent />
        <BusinessNeedsComponent />
        <RecentBlogpostsComponent />
        <DeliverQualityComponent />
        <FooterComponent />
      </div>
    </div>
  );
};

export default HomeComponent;
