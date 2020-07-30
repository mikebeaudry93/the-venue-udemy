import React, { Component } from "react";
import { Element } from "react-scroll";

import "./resources/styles.css";

import Header from "./components/header-footer/Header";
import Featured from "./components/featured/index";
import VenueNfo from "./components/venueNfo/index";
import Highlights from "./components/highlights/";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/header-footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="app" style={{ height: "1500px", background: "white" }}>
        <Header />
        <Element name="featured">
          <Featured />
        </Element>
        <Element name="venuenfo">
          <VenueNfo />
        </Element>
        <Element name="highlights">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
