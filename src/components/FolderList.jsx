import React, { useState } from "react";
import Folder from "./Folder";
const FolderList = (
  {
    // todoList,
    // todoList1,
    // addTodo,
    // removeTodo,
    // checkTodo,
  }
) => {
  const [todoList, setTodoList] = useState([
    { id: 1, inner: "firstInner", isChecked: false },
    { id: 2, inner: "secondInner", isChecked: false },
    { id: 3, inner: "thirdInner", isChecked: false },
    { id: 4, inner: "thirdInner", isChecked: true },
    { id: 5, inner: "thirdInner", isChecked: false },
  ]);
  const [todoList1, setTodoList1] = useState([
    { id: 6, inner: "firstInner", isChecked: true },
    { id: 7, inner: "secondInner", isChecked: false },
    { id: 8, inner: "thirdInner", isChecked: false },
    { id: 9, inner: "thirdInner", isChecked: false },
    { id: 10, inner: "thirdInner", isChecked: false },
  ]);
  const checkTodo = (todo, isChecked, index) => {
    console.log("check");
    console.log(todo);

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
  const [folderList, setFolderList] = useState([
    {
      todoList: todoList,
      folderName: "12223",
      isVisible: true,
      setTodoList: setTodoList,
      remove: removeTodo,
    },
    {
      todoList: todoList1,
      folderName: "312",
      isVisible: true,
      setTodoList: setTodoList1,
      remove: removeTodo,
    },
  ]);
  return (
    <div>
      {folderList.map((elem, index) => (
        <Folder
          removeTodo={elem.remove}
          checkTodo={checkTodo}
          addTodo={addTodo}
          setTodoList={elem.setTodoList}
          isVisible={elem.isVisible}
          setIsVisible={elem.setIsVisible}
          folderName={elem.folderName}
          todoList={elem.todoList}
          key={index}
        />
      ))}
    </div>
  );
};

export default FolderList;
