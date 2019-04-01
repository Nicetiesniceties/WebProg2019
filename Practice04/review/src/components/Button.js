import React, { Component } from "react";

class Button extends Component {
  render() {
    return <button id={this.props.id}>{this.props.text}</button>;
  }
}

class CleanButton extends Component {
  render() {
    return (
      <button
        className={this.props.className}
        id={this.props.id}
        onClick={this.props.cleanTodoArray}
      >
        {this.props.text}
      </button>
    );
  }
}
export { CleanButton };
export default Button;
