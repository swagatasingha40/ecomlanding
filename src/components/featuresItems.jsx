import React from "react";
import "../css/featuredItems.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CementI from "../assets/ramco.webp";
import Cement from "../assets/ambuja.webp";

function FeaturedItems(props) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="OuterWrapFeaturedItems">
      <div className="InnerWrapFeaturedItems">
        <div className="featureHeader">Featured Items</div>
        <div>
          <Carousel responsive={responsive}>
            <div className="topElement1">
              <span className="featuredSpanner">Featured</span>
              <a href="#">
                <img className="topEleimg1" src={Cement} alt="img1" />
                <p className="prodname">Cement Name</p>
                <div className="priceClass">
                  <p className="priceSpan">Price</p>
                  <p className="offerspan">(Offer)</p>
                </div>
              </a>
            </div>
            <div className="topElement1">
              <span className="featuredSpanner">Featured</span>
              <a href="#">
                <img className="topEleimg1" src={CementI} alt="img1" />
                <p className="prodname">Cement Name</p>
                <div className="priceClass">
                  <p className="priceSpan">Price</p>
                  <p className="offerspan">(Offer)</p>
                </div>
              </a>
            </div>
            <div className="topElement1">
              <span className="featuredSpanner">Featured</span>
              <a href="#">
                <img className="topEleimg1" src={Cement} alt="img1" />
                <p className="prodname">Cement Name</p>
                <div className="priceClass">
                  <p className="priceSpan">Price</p>
                  <p className="offerspan">(Offer)</p>
                </div>
              </a>
            </div>
            <div className="topElement1">
              <span className="featuredSpanner">Featured</span>
              <a href="#">
                <img className="topEleimg1" src={CementI} alt="img1" />
                <p className="prodname">Cement Name</p>
                <div className="priceClass">
                  <p className="priceSpan">Price</p>
                  <p className="offerspan">(Offer)</p>
                </div>
              </a>
            </div>
            <div className="topElement1">
              <span className="featuredSpanner">Featured</span>
              <a href="#">
                <img className="topEleimg1" src={Cement} alt="img1" />
                <p className="prodname">Cement Name</p>
                <div className="priceClass">
                  <p className="priceSpan">Price</p>
                  <p className="offerspan">(Offer)</p>
                </div>
              </a>
            </div>
            <div className="topElement1">
              <span className="featuredSpanner">Featured</span>
              <a href="#">
                <img className="topEleimg1" src={Cement} alt="img1" />
                <p className="prodname">Cement Name</p>
                <div className="priceClass">
                  <p className="priceSpan">Price</p>
                  <p className="offerspan">(Offer)</p>
                </div>
              </a>
            </div>
            <div className="topElement1">
              <span className="featuredSpanner">Featured</span>
              <a href="#">
                <img className="topEleimg1" src={Cement} alt="img1" />
                <p className="prodname">Cement Name</p>
                <div className="priceClass">
                  <p className="priceSpan">Price</p>
                  <p className="offerspan">(Offer)</p>
                </div>
              </a>
            </div>
            <div className="topElement1">
              <span className="featuredSpanner">Featured</span>
              <a href="#">
                <img className="topEleimg1" src={Cement} alt="img1" />
                <p className="prodname">Cement Name</p>
                <div className="priceClass">
                  <p className="priceSpan">Price</p>
                  <p className="offerspan">(Offer)</p>
                </div>
              </a>
            </div>
            <div className="topElement1">
              <span className="featuredSpanner">Featured</span>
              <a href="#">
                <img className="topEleimg1" src={Cement} alt="img1" />
                <p className="prodname">Cement Name</p>
                <div className="priceClass">
                  <p className="priceSpan">Price</p>
                  <p className="offerspan">(Offer)</p>
                </div>
              </a>
            </div>
            <div className="topElement1">
              <span className="featuredSpanner">Featured</span>
              <a href="#">
                <img className="topEleimg1" src={Cement} alt="img1" />
                <p className="prodname">Cement Name</p>
                <div className="priceClass">
                  <p className="priceSpan">Price</p>
                  <p className="offerspan">(Offer)</p>
                </div>
              </a>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default FeaturedItems;
