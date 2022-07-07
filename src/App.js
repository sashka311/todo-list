import React, { useState } from "react";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import Folder from "./components/Folder";
import FolderList from "./components/FolderList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, inner: "1", isChecked: false },
    { id: 2, inner: "2", isChecked: false },
    { id: 3, inner: "3", isChecked: false },
    { id: 4, inner: "4", isChecked: true },
    { id: 5, inner: "5", isChecked: false },
  ]);
  const [todoList1, setTodoList1] = useState([
    { id: 1, inner: "6", isChecked: false },
    { id: 2, inner: "7", isChecked: false },
    { id: 3, inner: "8", isChecked: false },
    { id: 4, inner: "9", isChecked: true },
    { id: 5, inner: "10", isChecked: false },
  ]);
  const addTodo = (newTodo, setNewTodo, setTodoList, todoList) => {
    console.log("add");
    const newPost = {
      id: Date.now(),
      inner: newTodo,
    };

    setTodoList([...todoList, newPost]);
    setNewTodo("");
  };
  const checkTodo = (todo, isChecked, index, setTodoList, todoList) => {
    console.log("check");
    console.log(index);

    setTodoList([
      ...todoList.slice(0, index),
      { ...todoList[index], isChecked: !todoList[index].isChecked },
      ...todoList.slice(index + 1, todoList.length),
    ]);
  };

  const removeTodo = (todo, setTodoList, todoList) => {
    setTodoList([...todoList].filter((t) => t.id !== todo.id));
  };

  return (
    <div className="App">
      <Folder
        todoList={todoList}
        setTodoList={setTodoList}
        checkTodo={checkTodo}
        removeTodo={removeTodo}
        folderName={"11"}
        addTodo={addTodo}
      />
      <Folder
        todoList={todoList1}
        setTodoList={setTodoList1}
        checkTodo={checkTodo}
        removeTodo={removeTodo}
        folderName={"11"}
        addTodo={addTodo}
      />
    </div>
  );
}

export default App;
