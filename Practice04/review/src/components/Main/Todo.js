import React, { Component } from "react";
import xImage from "../../assets/x.png";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: "active"
    };
  }
  render() {
    return (
      <li className="todo-app__item">
        <div className="todo-app__checkbox">
          <input
            type="checkbox"
            id={this.props.id}
            onChange={() => this.props.checkTodo(this.props.id)}
          />
          <label htmlFor={this.props.id} />
        </div>

        <div className="todo-app__item-details">
          <h1 className="todo-app__item-detail">{this.props.todoTitle}</h1>
        </div>

        <img
          src={xImage}
          className="todo-app__item-x"
          alt=""
          onClick={() => this.props.deleteTodo(this.props.id)}
        />
      </li>
    );
  }
}

export default Todo;
