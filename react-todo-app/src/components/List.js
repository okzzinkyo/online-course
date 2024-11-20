import React from 'react'

// React.memo를 적용하기 위해 arrow function으로 변경

const List = React.memo(({
  id,
  title,
  completed,
  todoList,
  setTodoList,
  provided,
  snapshot
}) => {
  // console.log('List component');
  
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
    <div
      key={id}
      {...provided.draggableProps}
      ref={provided.innerRef}
      {...provided.dragHandleProps}
      className={`${snapshot.isDragging ? 'bg-gray-400' : 'bg-gray-100'
        } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-500 bg-gray-100 border rounded`}
    >
      <div className='items-center'>
        <input
          type='checkbox'
          onChange={() => {
            handleCompleteChange(id);
          }}
          defaultChecked={completed}
        />{' '}
        <span className={completed ? 'line-through' : undefined}>{title}</span>
      </div>
      <div className='items-center'>
        <button className='px-4 py-2' onClick={() => handleClick(id)}>
          X
        </button>
      </div>
    </div>
  );
});

export default List;