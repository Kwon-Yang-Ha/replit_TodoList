import React from 'react';

const TodoBoard = ({ todoList, onDelete }) => {
  return (
    <ul>
      <h1>Todo List</h1>
      {todoList.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => onDelete(index)}>삭제</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoBoard;

