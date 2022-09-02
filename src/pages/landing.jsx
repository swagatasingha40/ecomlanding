import React from "react";
import Footer from "../components/footer";
import NavbarMenu from "../components/nav";
import CarouselMain from "../components/carousel";
import UpperFeatures from "../components/upperFeatures";
import FeaturedItems from "../components/featuresItems";
import Sidebar from "../components/sidebar";

function Landing(props) {
  return (
    <div className="App">
      <NavbarMenu />
      <UpperFeatures />
      <CarouselMain />
      <FeaturedItems />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default Landing;
