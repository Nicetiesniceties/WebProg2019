import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="todo-app__inputs">
        <input
          type="text"
          placeholder="What needs to be done?"
          className="todo-app__input"
          id="todo-title"
          onKeyPress={this.props.onKeyPress}
        />
      </div>
    );
  }
}

export default Input;
