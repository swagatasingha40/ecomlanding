import React from "react";
import "../css/upperfeature.css";
import CementI from "../assets/cement.png";
import Sanitary from "../assets/sanitary.png";
import Laboratory from "../assets/laboratory.png";
import Pipe from "../assets/pipe.png";
import Tiles from "../assets/tiles.png";

function UpperFeatures(props) {
  return (
    <div className="OuterWrapUpperFeatures">
      <div className="InnerWrapUpperFeatures">
        <div className="topElement">
          <a href="#">
            <img className="topEleimg" src={CementI} alt="img1" />
            <p>Cement</p>
          </a>
        </div>
        <div className="topElement">
          <a href="#">
            <img className="topEleimg" src={Sanitary} alt="img1" />
            <p>Sanitary</p>
          </a>
        </div>
        <div className="topElement">
          <a href="#">
            <img className="topEleimg" src={Laboratory} alt="img1" />
            <p>Chemical</p>
          </a>
        </div>
        <div className="topElement">
          <a href="#">
            <img className="topEleimg" src={Pipe} alt="img1" />
            <p>Pipe</p>
          </a>
        </div>
        <div className="topElement">
          <a href="#">
            <img className="topEleimg" src={Tiles} alt="img1" />
            <p>Tiles</p>
          </a>
        </div>
        <div className="topElement">
          <a href="#">
            <img className="topEleimg" src={Pipe} alt="img1" />
            <p>TMT</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default UpperFeatures;
