import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 공부하기', done: false },
    { id: 2, text: 'AWS S3 배포하기', done: false },
  ]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  const addTodo = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setTodos([...todos, { id: Date.now(), text: trimmed, done: false }]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTodo();
  };

  const filtered = todos.filter((t) => {
    if (filter === 'active') return !t.done;
    if (filter === 'done') return t.done;
    return true;
  });

  const remaining = todos.filter((t) => !t.done).length;

  return (
    <div className="container">
      <h1 className="title">할 일 관리</h1>
      <p className="subtitle">20263624 장서영</p>

      <div className="input-area">
        <input
          type="text"
          placeholder="할 일을 입력하세요..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="todo-input"
        />
        <button onClick={addTodo} className="add-btn">추가</button>
      </div>

      <div className="filter-area">
        {['all', 'active', 'done'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`filter-btn ${filter === f ? 'active' : ''}`}
          >
            {f === 'all' ? '전체' : f === 'active' ? '진행 중' : '완료'}
          </button>
        ))}
      </div>

      <ul className="todo-list">
        {filtered.length === 0 && (
          <li className="empty">할 일이 없습니다.</li>
        )}
        {filtered.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.done ? 'done' : ''}`}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
              className="todo-check"
            />
            <span className="todo-text">{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)} className="delete-btn">삭제</button>
          </li>
        ))}
      </ul>

      <p className="count">남은 할 일: {remaining}개</p>
    </div>
  );
}

export default App;
