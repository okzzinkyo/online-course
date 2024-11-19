import React, {useState}  from "react";
import "./App.css";

export default function App () {
  // react hooks을 사용한 상태 관리
  const [todoList, setTodoList] = useState([]);
  const [value, setValue] = useState('');

  // state = {
  //   todoList: [],
  //   value: '',
  // };

  const btnStyle = {
    padding: '5px 9px',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
  };

  const getStyle = (completed) => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: completed ? 'line-through' : 'none',
    };
  };

  const handleClick = (id) => {
    let newTodoList = todoList.filter((list) => list.id !== id);
    setTodoList(newTodoList);
    
    // 함수형 컴포넌트에서는 this.state, this.setState로 데이터를 관리하지 않는다.
    // let newTodoList = this.state.todoList.filter((list) => list.id !== id);
    // this.setState({ todoList: newTodoList });
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleCompleteChange = (id) => {
    let newTodoList = todoList.map((list) => {
      if (list.id === id) {
        list.completed = !list.completed;
      }
      return list;
    });

    setTodoList(newTodoList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      return alert('해야 할 일을 입력해 주세요.');
    }

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false
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
        <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
          <input
            type='text'
            name='value'
            style={{ flex: '10', padding: '5px' }}
            placeholder='해야 할 일을 입력해 주세요.'
            value={value}
            onChange={(e) => handleInputChange(e)}
          />
          <input type='submit' value='입력' className='btn' style={{ flex: 1 }} />
        </form>
        {todoList.map((list) => (
          // key 속성
          // 1,2 뒤에 3리스트를 넣을 때는 3번째 리스트만 추가하면 된다고 인식하지만, 3리스트를 앞에 넣을 때는 1,2 모두 변경됐다고 인식하기 때문에 모든 자식 엘리먼트를 새롭게 그려버린다.
          // 따라서 key 속성을 유니크한 값으로 부여하면 어떤 부분이 바뀌었는지 정확하게 인식할 수 있다.
          <div style={getStyle(list.completed)} key={list.id}>
            <input
              type='checkbox'
              onChange={() => {
                handleCompleteChange(list.id);
              }}
              defaultChecked={list.completed}
            />
            {list.title}
            <button style={btnStyle} onClick={() => handleClick(list.id)}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}