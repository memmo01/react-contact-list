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

  handleClick() {
    this.setState({
      showHello: !this.state.showHello
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Contact />
        <button onClick={this.handleClick.bind(this)}>click</button>
        {this.state.showHello ? <h1>hi</h1> : null}
      </div>
    );
  }
}

export default App;
