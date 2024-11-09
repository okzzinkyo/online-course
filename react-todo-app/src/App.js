import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  btnStyle = {
    padding: "5px 9px",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    float : "right"
  }

  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none"
    }
  }

  todoList = [
    {
      id: "1",
      title: "공부하기",
      completed: true
    },
    {
      id: "2",
      title: "청소하기",
      completed: false
    },
  ];
  render() {
    return (
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>
          {this.todoList.map((list) => (
            <div style={this.getStyle()} key={list.id}>
              <input type='checkbox' defaultChecked={list.completed}/>
              {list.title}
              <button style={this.btnStyle}>X</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}