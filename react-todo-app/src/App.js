import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    todoList : [
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
    ],
    value: "",
  }

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

  handleClick = (id) => {
    let newTodoList = this.state.todoList.filter((list) => list.id !== id);
    this.setState({ todoList: newTodoList });
  }

  render() {
    return (
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>
          {this.state.todoList.map((list) => (
            // key 속성
            // 1,2 뒤에 3리스트를 넣을 때는 3번째 리스트만 추가하면 된다고 인식하지만, 3리스트를 앞에 넣을 때는 1,2 모두 변경됐다고 인식하기 때문에 모든 자식 엘리먼트를 새롭게 그려버린다.
            // 따라서 key 속성을 유니크한 값으로 부여하면 어떤 부분이 바뀌었는지 정확하게 인식할 수 있다.
            <div style={this.getStyle()} key={list.id}>
              <input type='checkbox' defaultChecked={list.completed} />
              {list.title}
              <button style={this.btnStyle} onClick={() => this.handleClick(list.id)}>
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}