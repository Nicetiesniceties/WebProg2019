import React, { Component } from "react";
import Head from "./Head";
import Main from "./Main";
import Footer from "./Footer";

global.ID = 0;

var TodoObj = function(id, title) {
  this.key = id;
  this.id = id;
  this.todoTitle = title;
  this.state = "active";
};

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TodoArray: []
    };
  }

  addTodoObj(title) {
    const todo = new TodoObj(global.ID, title);
    this.setState(state => {
      const newTodoArray = state.TodoArray.concat(todo);
      console.log("Add to TodoArray");
      global.ID++;
      return { TodoArray: newTodoArray };
    });
  }

  delTodoObj(id) {
    let removeIndex = this.state.TodoArray.map(item => {
      return item.id;
    }).indexOf(id);

    this.setState(state => {
      state.TodoArray.splice(removeIndex, 1);
      const newTodoArray = state.TodoArray;
      return { TodoArray: newTodoArray };
    });
  }

  handleDelete = id => {
    this.delTodoObj(id);
  };

  handleCheck = id => {
    console.log("Checked!");
    this.setState(state => {
      state.TodoArray.forEach(element => {
        if (element.id === id) {
          if (element.state == "active") {
            element.state = "complete";
          } else if (element.state == "complete") {
            element.state = "active";
          }
        }
      });
      const newTodoArray = state.TodoArray;
      console.log(newTodoArray);
      return { TodoArray: newTodoArray };
    });
  };

  handleSubmit = event => {
    if (event.key === "Enter") {
      console.log("Got the message!");
      this.addTodoObj(event.target.value);
      event.target.value = "";
    }
  };

  handleClean = () => {
    const newTodoArray = this.state.TodoArray.filter(
      e => e.state != "complete"
    );
    this.setState({ TodoArray: newTodoArray });
  };

  render() {
    return (
      <div id="root" className="todo-app__root">
        <Head title="todos" />
        <Main
          handleSubmit={this.handleSubmit}
          handleDelete={this.handleDelete}
          handleCheck={this.handleCheck}
          TodoArray={this.state.TodoArray}
        />
        <Footer
          leftNumber={
            this.state.TodoArray.filter(e => e.state === "active").length
          }
          handleClean={this.handleClean}
        />
      </div>
    );
  }
}

export default Root;
