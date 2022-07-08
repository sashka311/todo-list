import React, { useState } from "react";
import Folder from "./Folder";
import MyInput from "../UI/input/MyInput";

const FolderList = ({
  folderList,
  checkTodo,
  removeTodo,
  removeFolder,
  addTodo,
  addFolder,
}) => {
  const [folderTitle, setFolderTitle] = useState("");

  const handleAddFolderEnter = (e) => {
    if (e.key === "Enter" && folderTitle) {
      addFolder(folderTitle);
      setFolderTitle("");
    }
  };

  return (
    <div className={"folderList"}>
      <MyInput
        value={folderTitle}
        onChange={(e) => setFolderTitle(e.target.value)}
        placeholder={"Add new folder..."}
        onKeyDown={(e) => handleAddFolderEnter(e)}
      />
      {folderList.map((elem, index) => (
        <Folder
          key={elem.id}
          folderIndex={index}
          folderId={elem.id}
          todoList={elem.todoList}
          checkTodo={checkTodo}
          removeTodo={removeTodo}
          removeFolder={removeFolder}
          folderName={elem.folderName}
          addTodo={addTodo}
        />
      ))}
    </div>
  );
};

export default FolderList;
