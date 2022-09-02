import React from "react";
import "../css/nav.css";
import Sidebar from "./sidebar";
import { BsFillGeoAltFill } from "react-icons/bs";
import { BsCartPlusFill } from "react-icons/bs";

function Navbar(props) {
  return (
    <div className="navbarOuterWrapper" id="navbar">
      <div className="navbarInnerWrapper">
        <div className="logo">
          <a href="/">LOGO</a>
        </div>
        <div className="deliver">
          <a href="/">
            <BsFillGeoAltFill />
            Deliver To
          </a>
        </div>
        <div className="searchElement">
          <div className="searchWrap">
            <input className="searchInput" type="text" placeholder="search" />
            <button className="searchBtn">Search</button>
          </div>
        </div>
        <div className="register">
          <a href="/">Register as Seller</a>
        </div>
        <div className="signIn">
          <a href="/">Sign In</a>
        </div>
        <div className="cart">
          <a href="/">
            <BsCartPlusFill />
          </a>
        </div>
      </div>
      <div className="secondNavWrapper">
        <div id="menubar">
          <Sidebar pageWrapId={"menubar"} outerContainerId={"App"} />
        </div>
        <div>support@infrabag.com</div>
        <div>+919147150305</div>
      </div>
    </div>
  );
}

export default Navbar;
