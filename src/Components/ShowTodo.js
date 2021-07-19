import { Component } from "react";

class ShowTodo extends Component {
  constructor (props){
    super (props);
    this.state = {
      List:[]
    }
  }

  handleCheck(index) {
    console.log(index);
    let task = JSON.parse(localStorage.getItem('todos'));
    task[index].isCompleted = !task[index].isCompleted;
    localStorage.setItem('todos', JSON.stringify(task));
    this.setState({
      List: task
    })
  }
  render() {
    let task = JSON.parse(localStorage.getItem("todos"));    
    task = task.map((data, ind) => {
      return (
        <div key={Math.random() * ind}>          
        <div>
          {data.todo}
        </div>
        <div>
         <input type = 'checkbox' checked = {data.isCompleted} onChange = {() => this.handleCheck(ind)} />
         <button> delete </button>
        </div>
        </div>
      );
    });
    return <div>{task}</div>;
  }
}

export default ShowTodo;
