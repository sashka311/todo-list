import React, { useState } from "react";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import Folder from "./components/Folder";
function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, inner: "firstInner", isChecked: false },
    { id: 2, inner: "secondInner", isChecked: false },
    { id: 3, inner: "thirdInner", isChecked: false },
    { id: 4, inner: "thirdInner", isChecked: false },
    { id: 5, inner: "thirdInner", isChecked: false },
  ]);
  const [isFolderVisible, setIsFolderVisible] = useState(true);
  const checkTodo = (todo, isChecked, index) => {
    setTodoList([
      ...todoList.slice(0, index),
      { ...todoList[index], isChecked: !todoList[index].isChecked },
      ...todoList.slice(index + 1, todoList.length),
    ]);
  };
  const addTodo = (newTodo, setNewTodo) => {
    const newPost = {
      id: Date.now(),
      inner: newTodo,
    };
    setTodoList([...todoList, newPost]);
    setNewTodo("");
  };
  const removeTodo = (todo) => {
    setTodoList([...todoList].filter((t) => t.id !== todo.id));
  };
  console.log(123);
  return (
    <div className="App">
      <PostForm addTodo={addTodo} />
      <Folder
        isVisible={isFolderVisible}
        setIsVisible={setIsFolderVisible}
        addTodo={addTodo}
        checkTodo={checkTodo}
        removeTodo={removeTodo}
        todoList={todoList}
        folderName={"First folder"}
      />
    </div>
  );
}

export default App;
