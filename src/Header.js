import React from "react";

class Header extends React.Component {
  state = {
    title: "Say hello to ReactJS",
    msg:
      "You will learn a Frontend Framework from scratch, to become an Ninja Developer",
  };
  render() {
    return (
      <header>
        <h1> {this.state.title} </h1>
        <p> {this.state.msg} </p>
        <div className="awesome">Awesome!</div>
      </header>
    );
  }
}

export default Header;
