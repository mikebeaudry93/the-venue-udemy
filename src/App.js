import React, { Component } from "react";

import "./resources/styles.css";

import Header from "./components/header-footer/Header";
import Featured from "./components/featured/index";

class App extends Component {
  render() {
    return (
      <div className="app" style={{ height: "1500px", background: "red" }}>
        <Header />
        <Featured />
      </div>
    );
  }
}

export default App;
