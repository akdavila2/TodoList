import React from 'react';
import { TodoCounter } from '../src/components/TodoCounter';
import { TodoSearch } from '../src/components/TodoSearch';
import { TodoList } from '../src/components/TodoList';
import { TodoItem } from '../src/components/TodoItem';
import { CreateTodoButton } from '../src/components/CreateTodoButton';
// import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;