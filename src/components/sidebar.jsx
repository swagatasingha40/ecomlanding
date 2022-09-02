import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../css/banner.css";
import ImgBanner from "../assets/banneImg.jpg";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <Menu {...props}>
        <a className="menu-item" href="/">
          Home
        </a>

        <a className="menu-item" href="/about">
          About
        </a>

        <a className="menu-item" href="/services">
          Services
        </a>

        <a className="menu-item" href="/contact">
          Contact us
        </a>
      </Menu>
    </div>
  );
}

export default Sidebar;
