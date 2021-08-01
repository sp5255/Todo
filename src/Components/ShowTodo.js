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
            <div>
            <input
              type="checkbox"
              checked={data.isCompleted}
              onChange={() => this.handleCheck(ind)}
            />            

            </div>
            <div onClick={() => this.DeleteTask(ind)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>
            </div>
            {/* <button > delete </button> */}
          </div>
        </div>
      );
    });
    return <div className="todoList">{task}</div>;
  }
}

export default ShowTodo;
