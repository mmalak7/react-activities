import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoComponents/TodoForm/TodoForm";
import { TodoList } from "./components/TodoComponents/TodoList/TodoList";
import "./App.scss";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTask = (event) => {
    event.preventDefault();
    let newTask = {
      task: todo,
      id: Date.now(),
      completed: false,
    };
    setTodos([...todos, newTask]);
    setTodo("");
  };

  const getLocalStorage = () => {
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          setTodos(value);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const saveLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    saveLocalStorage();
  }, [saveLocalStorage]);

  const inputChangeHandler = (event) => {
    setTodo(event.target.value);
  };

  const toogleCompleted = (itemId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === itemId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
    setTodo("");
  };

  const removeCompleted = (event) => {
    event.preventDefault();
    const newTodos = todos.filter((todo) => {
      return !todo.completed;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>What activity would you like to do?</h1>
      <TodoForm
        todos={todos}
        value={todo}
        inputChangeHandler={inputChangeHandler}
        addTask={addTask}
        removeCompleted={removeCompleted}
      />

      <TodoList todos={todos} toogleCompleted={toogleCompleted} />
    </div>
  );
}

export default App;
