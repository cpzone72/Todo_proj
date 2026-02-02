import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'bg-light' : ''}`}>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          id={`todo-${todo.id}`}
        />
        <label
          className={`form-check-label ${todo.completed ? 'text-decoration-line-through text-muted' : ''}`}
          htmlFor={`todo-${todo.id}`}
          style={{ cursor: 'pointer' }}
        >
          {todo.text}
        </label>
      </div>
      <button
        className="btn btn-outline-danger btn-sm border-0"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete todo"
      >
        <i className="bi bi-trash"></i>
      </button>
    </li>
  );
};

export default TodoItem;
