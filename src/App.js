import React, { useState } from "react";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import Folder from "./components/Folder";
import FolderList from "./components/FolderList";

function App() {
  return (
    <div className="App">
      <FolderList
      // checkTodo={checkTodo}
      // addTodo={addTodo}
      // removeTodo={removeTodo}
      // todoList={todoList}
      // todoList1={todoList1}
      />
    </div>
  );
}

export default App;
