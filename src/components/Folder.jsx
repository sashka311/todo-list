import React, { useState } from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";

const Folder = ({
  checkTodo,
  removeTodo,
  todoList,
  folderName,
  setTodoList,
  // isVisible,
  // setIsVisible,
  addTodo,
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

        <div className="folderArrow"></div>
      </div>
      {isVisible ? (
        <PostList
          addTodo={addTodo}
          checkTodo={checkTodo}
          remove={removeTodo}
          list={todoList}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Folder;