import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    todoList: [],
    value: '',
  };

  btnStyle = {
    padding: '5px 9px',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
  };

  getStyle = (completed) => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: completed ? 'line-through' : 'none',
    };
  };

  handleClick = (id) => {
    let newTodoList = this.state.todoList.filter((list) => list.id !== id);
    this.setState({ todoList: newTodoList });
  };

  handleInputChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleCompleteChange = (id) => {
    let newTodoList = this.state.todoList.map((list) => {
      if (list.id === id) {
        list.completed = !list.completed;
      }
      return list;
    });

    this.setState({ todoList: newTodoList });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false
    };

    this.setState({ todoList: [...this.state.todoList, newTodo], value: '' });
  };

  render() {
    return (
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>

          <form style={{ display: 'flex' }} onSubmit={this.handleSubmit}>
            <input
              type='text'
              name='value'
              style={{ flex: '10', padding: '5px' }}
              placeholder='해야 할 일을 입력해 주세요.'
              value={this.state.value}
              onChange={(e) => this.handleInputChange(e)}
            />
            <input type='submit' value='입력' className='btn' style={{ flex: 1 }} />
          </form>

          {this.state.todoList.map((list) => (
            // key 속성
            // 1,2 뒤에 3리스트를 넣을 때는 3번째 리스트만 추가하면 된다고 인식하지만, 3리스트를 앞에 넣을 때는 1,2 모두 변경됐다고 인식하기 때문에 모든 자식 엘리먼트를 새롭게 그려버린다.
            // 따라서 key 속성을 유니크한 값으로 부여하면 어떤 부분이 바뀌었는지 정확하게 인식할 수 있다.
            <div style={this.getStyle(list.completed)} key={list.id}>
              <input
                type='checkbox'
                onChange={() => {
                  this.handleCompleteChange(list.id);
                }}
                defaultChecked={list.completed}
              />
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