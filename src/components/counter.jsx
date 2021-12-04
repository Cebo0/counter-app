import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <buttton>Increment</buttton>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
