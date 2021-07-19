//import logo from './logo.svg';
import React, { Component } from "react";
import EnterTodo from "./Components/EnterTodo";
import ShowTodo from "./Components/ShowTodo";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    let todoList = JSON.parse(localStorage.getItem("todos"));
    if (todoList) {
    } else {
      todoList = [];
    }
    this.state = {
      todos: todoList,
    };
  }

  componentDidMount() {
    let List = JSON.parse(localStorage.getItem("todos"));
    if (List) {
      this.setState({ todos: List });
    } else {
      List = [];
      localStorage.setItem("todos", List);
    }
  }

  recTask(task) {
    let { todos } = this.state;
    let List = {
      todo:task,
      isCompleted:false,
      isDeleted:false
    }
    todos.push(List);
    this.setState({ todos: todos });
  }

  render() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
    const todoList = JSON.parse(localStorage.getItem("todos"));    
    return (
      <div>
        <EnterTodo recData={(task) => this.recTask(task)} />
        <ShowTodo List={todoList} />
      </div>
    );
  }
}
export default App;
