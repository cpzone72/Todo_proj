import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { Todo, FilterType } from './types';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import FilterButtons from './components/FilterButtons';

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState<FilterType>('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter((t) => !t.completed).length;

  return (
    <div className="container py-5">
      <div className="todo-container mx-auto">
        <h1 className="todo-header fw-bold">
          <i className="bi bi-check2-all text-primary me-2"></i>My Tasks
        </h1>

        <TodoForm onAdd={addTodo} />

        <FilterButtons currentFilter={filter} onFilterChange={setFilter} />

        <div className="todo-list border rounded overflow-hidden">
          {filteredTodos.length > 0 ? (
            <ul className="list-group list-group-flush">
              {filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))}
            </ul>
          ) : (
            <div className="p-5 text-center text-muted">
              {todos.length === 0 ? (
                <div>
                  <i className="bi bi-journal-plus display-4 d-block mb-3"></i>
                  할 일을 추가하고 관리를 시작해 보세요!
                </div>
              ) : (
                '필터링된 항목이 없습니다.'
              )}
            </div>
          )}
        </div>

        {todos.length > 0 && (
          <div className="mt-4 d-flex justify-content-between align-items-center text-muted small px-2">
            <span>남은 할 일: <strong>{activeCount}</strong>개</span>
            <span>전체: {todos.length}개</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
