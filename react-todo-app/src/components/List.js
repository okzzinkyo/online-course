import React from 'react'

export default function List({ todoList, setTodoList }) {
  const handleClick = (id) => {
    let newTodoList = todoList.filter((list) => list.id !== id);
    setTodoList(newTodoList);

    // 함수형 컴포넌트에서는 this.state, this.setState로 데이터를 관리하지 않는다.
    // let newTodoList = this.state.todoList.filter((list) => list.id !== id);
    // this.setState({ todoList: newTodoList });
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

  return (
    <>
      {todoList.map((list) => (
        // key 속성
        // 1,2 뒤에 3리스트를 넣을 때는 3번째 리스트만 추가하면 된다고 인식하지만, 3리스트를 앞에 넣을 때는 1,2 모두 변경됐다고 인식하기 때문에 모든 자식 엘리먼트를 새롭게 그려버린다.
        // 따라서 key 속성을 유니크한 값으로 부여하면 어떤 부분이 바뀌었는지 정확하게 인식할 수 있다.
        <div key={list.id}>
          <div className='flex items-center justify-between w-full px-4 py-1 my-2 text-gray-500 bg-gray-100 border rounded'>
            <div className='items-center'>
              <input
                type='checkbox'
                onChange={() => {
                  handleCompleteChange(list.id);
                }}
                defaultChecked={list.completed}
              />{" "}
              <span className={list.completed ? 'line-through' : undefined}>{list.title}</span>
            </div>
            <div className='items-center'>
              <button className='px-4 py-2' onClick={() => handleClick(list.id)}>X</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
