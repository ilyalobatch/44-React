import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) {
    return [];
  }

  return data;
};

const TodoList = () => {
  const [todos, setTodos] = useState(getInitialData);

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todoItem) => todoItem.id !== id);
    });
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, id: uuid(), completed: false }, ...prevTodos];
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          border: "1px solid",
          borderRadius: "20px",
        }}
      >
        <h1>Todo List</h1>

        <TodoForm addTodo={addTodo} />

        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            removeTodo={() => removeTodo(todo.id)}
            toggleTodo={() => toggleTodo(todo.id)}
          />
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
