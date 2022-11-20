import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: '1', text: '장보기', status: 'active' },
    { id: '2', text: '공부하기', status: 'active' },
  ]);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <>
      <ul>
        {todos.map((item) => (
          <li key={item.id}> {item.text} </li>
        ))}
      </ul>

      <AddTodo onAdd={handleAdd} />
    </>
  );
}
