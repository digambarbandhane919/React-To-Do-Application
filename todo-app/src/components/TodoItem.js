
import React from 'react';

const TodoItem = ({ todo, index, completeTodo, deleteTodo }) => {
  return (
    <div
      className="todo-item"
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
