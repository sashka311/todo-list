import React, { useState } from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";

const Folder = ({
  checkTodo,
  removeTodo,
  todoList,
  folderName,
  setTodoList,
  addTodo,
  // isVisible,
  // setIsVisible,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="folder">
      <div
        className="folderTitle"
        onClick={(e) => {
          setIsVisible(!isVisible);
        }}
      >
        <span className="folderIcon"></span>
        {folderName}
        <div className="folderHr"></div>

        <div
          className={isVisible ? "folderArrowOpen" : "folderArrowClose"}
        ></div>
      </div>
      {isVisible ? (
        <PostList
          todoList={todoList}
          addTodo={addTodo}
          checkTodo={checkTodo}
          remove={removeTodo}
          setTodoList={setTodoList}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Folder;
