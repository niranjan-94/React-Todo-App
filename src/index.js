import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Components/Todo.css";
import Todo from './Components/Todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);
