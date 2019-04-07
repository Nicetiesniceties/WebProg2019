import React, { Component } from "react";

class Total extends Component {
  render() {
    return (
      <div className="todo-app__total">
        <p>
          <b id="left_number">{this.props.leftNumber}</b> left
        </p>
      </div>
    );
  }
}

export default Total;
