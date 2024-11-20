import React from 'react';

// React.memo를 적용하기 위해 arrow function으로 변경

const List = React.memo(({ id, title, completed, todoList, setTodoList, provided, snapshot, handleClick }) => {
  console.log('List component');

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
      className={`${
        snapshot.isDragging ? 'bg-gray-400' : 'bg-gray-100'
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
