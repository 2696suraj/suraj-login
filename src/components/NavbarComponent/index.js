import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

import { Button, Dropdown, Space } from "antd";
import { GrClose } from "react-icons/gr";

import { FaSearch } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbBrandPicsart } from "react-icons/tb";
import { useContextva } from "../../App";
import "./index.css";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
        className="navbar-dropdown-menu"
      >
        PRICING
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
        className="navbar-dropdown-menu"
      >
        FAQ PAGE
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
        className="navbar-dropdown-menu"
      >
        CREATIVE TEAM
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
        className="navbar-dropdown-menu"
      >
        TEAM DETAILS
      </a>
    ),
  },
  {
    key: "5",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
        className="navbar-dropdown-menu"
      >
        SIGNIN
      </a>
    ),
  },
];
const NavbarComponent = (props) => {
  const [Navbstatevalue, NavbarstateCall] = useState({ sideBar: true });
  const consumer = useContext(useContextva);

  const PathList = [
    { pathname: "HOME", id: 1 },
    { pathname: "ABOUT", id: 2 },
    { pathname: "SERVICES", id: 3 },
    { pathname: "PROJECT", id: 4 },
    { pathname: "BLOG", id: 5 },
    { pathname: "PAGES", id: 6 },
    { pathname: "CONTACT", id: 7 },
  ];

  const sideMenuBarClocingFuntion = () => {
    NavbarstateCall({ sideBar: true });
  };
  const sideMenuBarOpeningFuntion = () => {
    NavbarstateCall({ sideBar: false });
  };
  return (
    <nav className="navbar-bg-co">
      <div className="navbar-logo-class-co">
        <Link to="/home">
          {" "}
          <img
            src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.b3dd6246.png&w=256&q=75"
            alt="loding"
            className="navbar-logo-class"
          />
        </Link>
      </div>

      <div className="navbar-small-size-icon-co">
        <FaSearch
          className={
            Navbstatevalue.sideBar
              ? "navbar-small-size-icon-co-search-icon"
              : "navbar-small-size-icon-co-search-icon-first-se"
          }
        />
        <VscThreeBars
          onClick={sideMenuBarOpeningFuntion}
          className={
            Navbstatevalue.sideBar
              ? "navbar-small-size-icon-co-search-icon-se"
              : "navbar-small-size-icon-co-search-icon-se-se"
          }
        />


      </div>
      <div
        className={
          Navbstatevalue.sideBar === true
            ? "navbar-menu-slider-bg-co-se"
            : "navbar-menu-slider-bg-co"
        }
      >
        <div className="navbar-menu-slider-card-co">
          <div className="navbar-menu-slider-card-co-first-icon-co">
            <GrClose
              value="close"
              className="navbar-menu-slider-card-co-first-icon-co-icon-class"
              onClick={sideMenuBarClocingFuntion}
            />
          </div>
          {PathList.map((cc) => {
            const pathse = `/${cc.pathname}`;
            const classNamepath =
              props.path === cc.pathname
                ? "navbar-in-larg-size-menu-se"
                : "navbar-in-larg-size-menu";
            console.log(consumer.path, cc.pathname);
            const inNavbarPathFuntion = () => {
              consumer.inStatePathChangeFuntion(cc.pathname);
            };
            return (
              <p className={classNamepath}>
                {" "}
                <Dropdown
                  className="fropdown-navbar-bg-co"
                  menu={{
                    items,
                  }}
                >
                  <Button
                    className={classNamepath}
                    onClick={inNavbarPathFuntion}
                  >
                    <Link className="navbar-menu-slider-card-co-option-class" to={pathse}>{cc.pathname}</Link>
                  </Button>
                </Dropdown>
              </p>
            );
          })}
          <h1 className="navbar-menu-slider-card-co-icon-heding">
            Contact Info
          </h1>

          <div className="navbar-menu-slider-card-co-icon-icon-co">
            <img
              src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsidebar-icon-1.c67a5844.png&w=16&q=75"
              alt="loding"
              className="navbar-menu-slider-card-co-icon-icon-co-image-class"
            />{" "}
            <p className="navbar-menu-slider-card-co-icon-icon-co-paragraph">
              86 broken street road New York
            </p>
          </div>
          <div className="navbar-menu-slider-card-co-icon-icon-co">
            <img
              src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-icon-1.5a4c1ebd.png&w=32&q=75"
              alt="loding"
              className="navbar-menu-slider-card-co-icon-icon-co-image-class"
            />
            <p className="navbar-menu-slider-card-co-icon-icon-co-paragraph">
              surajspatil@gmail.com
            </p>
          </div>
          <div className="navbar-menu-slider-card-co-icon-icon-co">
            <img
              src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-icon-2.f2d81432.png&w=32&q=75"
              alt="loding"
              className="navbar-menu-slider-card-co-icon-icon-co-image-class"
            />
            <p className="navbar-menu-slider-card-co-icon-icon-co-paragraph">
              746833782
            </p>
          </div>

          <div className="navbar-menu-slider-card-co-bottom-icon-bg-co">
            <div className="navbar-menu-slider-card-co-bottom-icon-bg-co-icon-card-co">
              <FaTwitter className="navbar-menu-slider-card-co-bottom-icon-bg-co-icon-card-co-icon-class" />
            </div>
            <div className="navbar-menu-slider-card-co-bottom-icon-bg-co-icon-card-co">
              <TbBrandPicsart className="navbar-menu-slider-card-co-bottom-icon-bg-co-icon-card-co-icon-class" />
            </div>
            <div className="navbar-menu-slider-card-co-bottom-icon-bg-co-icon-card-co">
              <FaFacebookF className="navbar-menu-slider-card-co-bottom-icon-bg-co-icon-card-co-icon-class" />
            </div>
            <div className="navbar-menu-slider-card-co-bottom-icon-bg-co-icon-card-co">
              <FaInstagram className="navbar-menu-slider-card-co-bottom-icon-bg-co-icon-card-co-icon-class" />
            </div>
          </div>
        </div>
      </div>
    

      <div className="larg-icon-manu-bg-co">
        <div className="navbar-menu-in-larg-size-co">
          {PathList.map((cc) => {
            const path = `/${cc.pathname}`;
            const classNamepath =
              props.path === cc.pathname
                ? "navbar-in-larg-size-menu-se"
                : "navbar-in-larg-size-menu";
            console.log(consumer.path, cc.pathname);
            const inNavbarPathFuntion = () => {
              consumer.inStatePathChangeFuntion(cc.pathname);
            };
            return (
              <p className={classNamepath}>
                {" "}
                <Dropdown
                  className="fropdown-navbar-bg-co"
                  menu={{
                    items,
                  }}
                >
                  <Button
                    className={classNamepath}
                    onClick={inNavbarPathFuntion}
                  >
                    <Link to={path}>{cc.pathname}</Link>
                  </Button>
                </Dropdown>
              </p>
            );
          })}
        </div>

        <div className="navbar-large-size-icons-co">
          <FaTwitter className="navbar-larg-icon-class" />
          <FaFacebookF className="navbar-larg-icon-class" />
          <TbBrandPicsart className="navbar-larg-icon-class" />
          <FaInstagram className="navbar-larg-icon-class" />
          <FaSearch className="navbar-larg-icon-class-se" />
          <button className="navbar-larg-button-class"> FREE ASTIMATE</button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
