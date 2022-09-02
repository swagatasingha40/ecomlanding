import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../css/banner.css";
import ImgBanner from "../assets/banneImg.jpg";

function CarouselHead(props) {
  return (
    <div className="App">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        interval={2000}
      >
        <div className="banner">
          <img className="bannerImg" src={ImgBanner} alt="img1" />
        </div>
        <div className="banner">
          <img className="bannerImg" src={ImgBanner} alt="img1" />
        </div>
        <div className="banner">
          <img className="bannerImg" src={ImgBanner} alt="img1" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselHead;
