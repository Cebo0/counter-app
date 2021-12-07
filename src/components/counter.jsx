import React, { Component } from "react";

class Counter extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <buttton
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm "
          >
            +
          </buttton>
          <buttton
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.value === 0 ? "disabled" : ""}
          >
            -
          </buttton>
          <button
            onClick={() => {
              return this.props.onDelete(this.props.counter.id);
            }}
            className="btn btn-danger btn-sm"
          >
            x
          </button>
        </div>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.counter === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
