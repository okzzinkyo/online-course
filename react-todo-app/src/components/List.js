import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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

  const handleEnd = (result) => {
    console.log(result);
    // result 매개변수에는 source 항목 및 대상 위치와 같은 드래그 이벤트에 대한 정보가 포함된다.
    // 목적지가 없으면(이벤트 취소) 이 함수를 종료한다.
    if (!result.destination) return;

    // 리엑트 불변성을 지켜주기 위해 새로운 todoList 생성
    const newTodoList = todoList;

    // 1. 변경시키는 아이템을 배열에서 지워준다.
    // 2. return 값으로 지워진 아이템을 잡아준다.
    // splice() - 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다.
    // 배열에 추가할 요소를 지정하지 않으면 요소를 제거하고, 제거된 요소를 담은 배열을 반환한다.
    const [reorderedItem] = newTodoList.splice(result.source.index, 1);

    // 원하는 자리에 reorderedItem을 insert 해준다.
    newTodoList.splice(result.destination.index, 0, reorderedItem);
    setTodoList(newTodoList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId='todo'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoList.map((list, index) => (
                // key 속성
                // 1,2 뒤에 3리스트를 넣을 때는 3번째 리스트만 추가하면 된다고 인식하지만, 3리스트를 앞에 넣을 때는 1,2 모두 변경됐다고 인식하기 때문에 모든 자식 엘리먼트를 새롭게 그려버린다.
                // 따라서 key 속성을 유니크한 값으로 부여하면 어떤 부분이 바뀌었는지 정확하게 인식할 수 있다.
                <Draggable key={list.id} draggableId={list.id.toString()} index={index}>
                  {(provided, snapshot) => (
                    <div
                      key={list.id}
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
                            handleCompleteChange(list.id);
                          }}
                          defaultChecked={list.completed}
                        />{' '}
                        <span className={list.completed ? 'line-through' : undefined}>{list.title}</span>
                      </div>
                      <div className='items-center'>
                        <button className='px-4 py-2' onClick={() => handleClick(list.id)}>
                          X
                        </button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
