import React, { Component } from "react";

class Head extends Component {
  render() {
    return (
      <header className="todo-app__header">
        <h1 className="todo-app__title">{this.props.title}</h1>
      </header>
    );
  }
}

export default Head;
