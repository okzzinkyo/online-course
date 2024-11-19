import React, {useState}  from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

export default function App () {
  // react hooks을 사용한 상태 관리
  const [todoList, setTodoList] = useState([]);
  const [value, setValue] = useState('');
  // state = {
  //   todoList: [],
  //   value: '',
  // };

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
    setValue('');
  };  

  // 함수형 컴포넌트에서는 render 없이 return 가능
  return (
    <div className='container'>
      <div className='todoBlock'>
        <div className='title'>
          <h1>할 일 목록</h1>
        </div>
        <h1 className="text-3xl font-bold underline">Hello World!</h1>
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit}></Form>
        <List todoList={todoList} setTodoList={setTodoList}></List>
      </div>
    </div>
  );
}