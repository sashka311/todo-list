import React, { useState } from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";

const Folder = ({
  checkTodo,
  removeTodo,
  removeFolder,
  todoList,
  folderName,
  addTodo,
  folderIndex,
  folderId,
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
        {isVisible ? "" : <div className={"todoAmount"}>{todoList.length}</div>}
        <div
          className="deleteFolderButton"
          onClick={() => removeFolder(folderId)}
        ></div>
      </div>
      {isVisible ? (
        <PostList
          todoList={todoList}
          addTodo={addTodo}
          checkTodo={checkTodo}
          removeTodo={removeTodo}
          folderIndex={folderIndex}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Folder;
