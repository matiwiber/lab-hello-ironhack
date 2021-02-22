import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Content from "./Content";
import "./App.css";

class App extends React.Component {
  //   state = {};
  render() {
    return (
      <div className="app">
        <div className="bg">
          <Navbar />
          <Header />
        </div>
        <Content />
      </div>
    );
  }
}

export default App;
