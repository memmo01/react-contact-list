import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showHello: true
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Contact name="Michael" email="m@mm.com" phone="000-000-0000" />
        <Contact name="Laura" email="l@mm.com" phone="010-000-0000" />
      </div>
    );
  }
}

export default App;
