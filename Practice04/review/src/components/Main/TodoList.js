import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul className="todo-app__list" id="todo-list">
        {this.props.TodoArray.map(e => (
          <Todo
            key={e.id}
            id={e.id}
            todoTitle={e.todoTitle}
            checkTodo={this.props.checkTodo}
            deleteTodo={this.props.deleteTodo}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
