import React, { useCallback, useState } from 'react';

// React.memo를 적용하기 위해 arrow function으로 변경

const List = React.memo(({ id, title, completed, todoList, setTodoList, provided, snapshot, handleClick }) => {
  // console.log('List component');

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleCompleteChange = (id) => {
    let newTodoList = todoList.map((list) => {
      if (list.id === id) {
        list.completed = !list.completed;
      }
      return list;
    });

    setTodoList(newTodoList);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodoList = todoList.map((list) => {
      if (list.id === id) {
        list.title = editedTitle;
      }
      return list;
    });

    setTodoList(newTodoList);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className={`flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}>
        <div className='items-center'>
          <form onSubmit={handleSubmit}>
            <input
              value={editedTitle}
              className='w-full px-3 py-2 mr-4 text-gray-500 rounded'
              onChange={(e) => setEditedTitle(e.target.value)}
              autoFocus
            />
          </form>
        </div>
        <div className='items-center'>
          <button type='button' className='float-rignt px-4 py-2' onClick={handleSubmit}>
            save
          </button>
          <button type='submit' className='px-4 py-2' onClick={() => setIsEditing(false)}>
            X
          </button>
        </div>
      </div>
    );
  } else {
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
          <button className='px-4 py-2' onClick={() => setIsEditing((prev) => !prev)}>
            edit
          </button>
          <button className='px-4 py-2' onClick={() => handleClick(id)}>
            X
          </button>
        </div>
      </div>
    );
  }
});

export default List;
