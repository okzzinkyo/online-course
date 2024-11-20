import React, {useState}  from "react";
import "./App.css";
import Lists from "./components/Lists";
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
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
        </div>
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit}/>
        <Lists todoList={todoList} setTodoList={setTodoList}/>
      </div>
    </div>
  );
}