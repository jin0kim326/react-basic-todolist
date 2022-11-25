import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
  // const [todos, setTodos] = useState(readTodosFromLs());
  /**
   * 위 코드는 상태가 변할때마다 readTodosFromLs()함수를 호출한다.
   * 물론 값이 변하지는 않는다. 왜냐하면 리액트 내부에서 저장된 값이있으면 그값을 불러오기 때문에 초기값으로 갱신되지않음
   *콜백으로 넘겨주면 처음에만 호출됨
   */
  const [todos, setTodos] = useState(() => readTodosFromLs());

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  const filtered = todos && getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {todos &&
          filtered.map((item) => (
            <Todo
              key={item.id}
              todo={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function readTodosFromLs() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
