import React, { useCallback, useState } from 'react';
import './App.css';
import Lists from './components/Lists';
import Form from './components/Form';

const initialTodoList = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [];

export default function App() {
  // console.log('App component');

  // react hooks을 사용한 상태 관리
  const [todoList, setTodoList] = useState(initialTodoList);
  const [value, setValue] = useState('');
  // state = {
  //   todoList: [],
  //   value: '',
  // };

  // useCallback 함수 최적화
  const handleClick = useCallback(
    (id) => {
      let newTodoList = todoList.filter((list) => list.id !== id);
      setTodoList(newTodoList);
      localStorage.setItem('todoList', JSON.stringify(newTodoList));

      // 함수형 컴포넌트에서는 this.state, this.setState로 데이터를 관리하지 않는다.
      // let newTodoList = this.state.todoList.filter((list) => list.id !== id);
      // this.setState({ todoList: newTodoList });
    },
    [todoList]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      return alert('해야 할 일을 입력해 주세요.');
    }

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    localStorage.setItem('todoList', JSON.stringify([...todoList, newTodo]));
    setValue('');
  };

  const handleRemoveClick = () => {
    setTodoList([]);
    localStorage.setItem('todoList', JSON.stringify([]));
  };

  // 함수형 컴포넌트에서는 render 없이 return 가능
  return (
    <div className='flex items-center justify-center w-screen h-screen bg-blue-100'>
      <div className='w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg'>
        <div className='flex justify-between mb-3'>
          <h1>할 일 목록</h1>
          <button onClick={handleRemoveClick}>Delete All</button>
        </div>
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
        <Lists handleClick={handleClick} todoList={todoList} setTodoList={setTodoList} />
      </div>
    </div>
  );
}
