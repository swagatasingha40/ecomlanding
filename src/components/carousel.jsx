import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../css/banner.css";
import ImgBanner from "../assets/banneImg.jpg";
import WebBanner from "../assets/web-banner.webp";
import WebBanner2 from "../assets/web-banner_2.webp";
import WebBanner3 from "../assets/web-banner-3.webp";
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
          <img className="bannerImg" src={WebBanner} alt="img1" />
        </div>
        <div className="banner">
          <img className="bannerImg" src={WebBanner2} alt="img1" />
        </div>
        <div className="banner">
          <img className="bannerImg" src={WebBanner3} alt="img1" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselHead;
