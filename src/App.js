import React, { useState } from "react";
import "./styles/App.css";
import FolderList from "./components/FolderList";
import MyInput from "./UI/input/MyInput";

function App() {
  const todoList = [
    { id: 1, inner: "1", isChecked: false },
    { id: 2, inner: "2", isChecked: false },
    { id: 3, inner: "3", isChecked: false },
    { id: 4, inner: "4", isChecked: true },
    { id: 5, inner: "5", isChecked: false },
  ];

  const todoList1 = [
    { id: 1, inner: "6", isChecked: false },
    { id: 2, inner: "7", isChecked: false },
    { id: 3, inner: "8", isChecked: false },
    { id: 4, inner: "9", isChecked: true },
  ];

  const [folderList, setFolderList] = useState([
    {
      id: 11,
      folderName: "111",
      todoList: todoList,
    },
    {
      id: 12,
      folderName: "122",
      todoList: todoList1,
    },
  ]);

  const addTodo = (newTodo, todoList, folderIndex) => {
    const newPost = {
      id: Date.now(),
      inner: newTodo,
      isChecked: false,
    };

    setFolderList((prev) => [
      ...prev.slice(0, folderIndex),
      { ...prev[folderIndex], todoList: [...todoList, newPost] },
      ...prev.slice(folderIndex + 1, prev.length),
    ]);
  };
  const addFolder = (newFolderTitle) => {
    const newFolder = {
      id: Date.now(),
      folderName: newFolderTitle,
      todoList: [{ id: Date.now() }],
    };
    setFolderList([...folderList, newFolder]);
  };
  const checkTodo = (index, folderIndex) => {
    setFolderList((prev) => [
      ...prev.slice(0, folderIndex),
      {
        ...prev[folderIndex],
        todoList: [
          ...prev[folderIndex].todoList.slice(0, index),
          {
            ...prev[folderIndex].todoList[index],
            isChecked: !prev[folderIndex].todoList[index].isChecked,
          },
          ...prev[folderIndex].todoList.slice(
            index + 1,
            prev[folderIndex].todoList.length
          ),
        ],
      },
      ...prev.slice(folderIndex + 1, prev.length),
    ]);
  };
  const removeTodo = (todo, folderIndex) => {
    setFolderList((prev) => [
      ...prev.slice(0, folderIndex),
      {
        ...prev[folderIndex],
        todoList: prev[folderIndex].todoList.filter((t) => t.id !== todo.id),
      },
      ...prev.slice(folderIndex + 1, prev.length),
    ]);
  };
  const removeFolder = (folderId) => {
    setFolderList([...folderList].filter((f) => f.id !== folderId));
  };
  return (
    <div className="App">
      <FolderList
        folderList={folderList}
        setFolderList={setFolderList}
        addTodo={addTodo}
        checkTodo={checkTodo}
        removeTodo={removeTodo}
        removeFolder={removeFolder}
        addFolder={addFolder}
      />
    </div>
  );
}

export default App;
