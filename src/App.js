import { useState } from "react";
import AddTodo from "./AddTodo";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import TodoItem from "./TodoItem";
const todoItems = [
  {
    sno: 1,
    todoTitle: "react completion..",
    todoDescription: "i will complete react as soon as possible...",
  },
  {
    sno: 2,
    todoTitle: "mern completion..",
    todoDescription: "i will complete react and mern as soon as possible...",
  },
];
function App() {
  const [todos, setTodos] = useState(todoItems);
  const loc = { ...todos };

  localStorage.setItem("todos", JSON.stringify(loc));

  const addItem = (todo) => {
    todo.sno = todos.length + 1;
    console.log(todo);
    setTodos([...todos, todo]);
    //it will not show the updated state unitll the function ends
  };
  const removeItem = (sno) => {
    const newTodo = todos.filter((todo) => {
      if (todo.sno === sno) {
        return false;
      }
      return true;
    });
    setTodos(newTodo);
  };
  return (
    <div className="App">
      <Header />
      <AddTodo addTodo={addItem} />
      <TodoItem todos={todos} removeTodo={removeItem} />
      <Footer />
    </div>
  );
}

export default App;
