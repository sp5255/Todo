import { Component } from "react";

class EnterTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }

  handleInput(e) {
    this.setState({ task: e.target.value });
  }

  sendData(task) {
    this.props.recData(task);
  }

  checkKeycode(e) {
    if (e.keyCode === 13) {      
      this.sendData(this.state.task);
      this.setState({ task: "" });
    }
  }

  render() {
    const task = this.state.task;
    return (
      <div>
        <input
          type="text"
          placeholder="Enter your Tasks here"
          value={task}
          onKeyDown={(e) => this.checkKeycode(e)}
          onChange={(e) => this.handleInput(e)}
        />
      </div>
    );
  }
}

export default EnterTodo;
