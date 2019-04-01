import React, { Component } from "react";
import Total from "../components/Total";
import Button from "../components/Button.js";
import { CleanButton } from "../components/Button.js";

class Footer extends Component {
  render() {
    return (
      <footer id="todo-footer" className="todo-app__footer">
        <Total leftNumber={this.props.leftNumber} />
        <div className="todo-app__view-buttons">
          <Button id="all-button" text="ALL" />
          <Button id="active-button" text="Active" />
          <Button id="complete-button" text="Completed" />
        </div>

        <div className="todo-app__clean">
          <CleanButton
            className="todo-app__clean button"
            id="clear-button"
            text="Clear completed"
            cleanTodoArray={this.props.handleClean}
          />
        </div>
      </footer>
    );
  }
}

export default Footer;
