import React, { useState } from 'react';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group shadow-sm">
        <input
          type="text"
          className="form-control"
          placeholder="무엇을 해야 하나요?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-primary px-4" type="submit">
          추가
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
