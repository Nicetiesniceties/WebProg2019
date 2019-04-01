import React, { Component } from "react";
import Input from "../components/Input";
import TodoList from "../components/Main/TodoList";

class Main extends Component {
  render() {
    return (
      <section className="todo-app__main">
        <Input onKeyPress={this.props.handleSubmit} />
        <TodoList
          TodoArray={this.props.TodoArray}
          checkTodo={this.props.handleCheck}
          deleteTodo={this.props.handleDelete}
        />
      </section>
    );
  }
}

export default Main;
