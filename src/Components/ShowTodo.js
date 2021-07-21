import { Component } from "react";

class ShowTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: this.props,
    };
  }

  componentDidMount() {
    let list = JSON.parse(localStorage.getItem("todos"));
    this.setState({
      List: list,
    });
  }

  static getDerivedStateFromProps(props, state) {
    if (props !== state) {
      return props;
    }
    return null;
  }

  handleCheck(index) {
    let task = this.state.List;
    task[index].isCompleted = !task[index].isCompleted;
    localStorage.setItem("todos", JSON.stringify(task));
    this.setState({
      List: task,
    });
  }

  updateList(newTodo) {
    this.props.newList(newTodo);
  }

  DeleteTask(ind) {
    let todoList = this.state.List;
    todoList.splice(ind, 1);
    localStorage.setItem("todos", JSON.stringify(todoList));
    this.setState({
      List: todoList,
    });
    this.updateList(this.state.List);
  }

  render() {
    //let task = JSON.parse(localStorage.getItem("todos"));
    const task = this.state.List.map((data, ind) => {
      return (
        <div key={Math.random() * ind} className="task">
          <div className={data.isCompleted ? "completed" : "null"}>
            {data.todo}
          </div>
          <div className="buttons">
            <input
              type="checkbox"
              checked={data.isCompleted}
              onChange={() => this.handleCheck(ind)}
            />
            <button onClick={() => this.DeleteTask(ind)}> delete </button>
          </div>
        </div>
      );
    });
    return <div className="todoList">{task}</div>;
  }
}

export default ShowTodo;
