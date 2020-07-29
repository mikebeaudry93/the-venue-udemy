import React, { Component } from "react";

import "./resources/styles.css";

import Header from "./components/header-footer/Header";
import Featured from "./components/featured/index";
import VenueNfo from "./components/venueNfo/index";

class App extends Component {
  render() {
    return (
      <div className="app" style={{ height: "1500px", background: "red" }}>
        <Header />
        <Featured />
        <VenueNfo />
      </div>
    );
  }
}

export default App;
