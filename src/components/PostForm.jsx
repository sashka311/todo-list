import React from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import { useState } from "react";
import classes from "../UI/input/MyInput.module.css";

const PostForm = ({ addTodo, todoList, folderIndex }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodoEnter = (e) => {
    if (e.key === "Enter" && newTodo) {
      addTodo(newTodo, todoList, folderIndex);
      setNewTodo("");
    }
  };
  return (
    <div className={"postForm"}>
      <div className={classes.inputIcon}></div>
      <MyInput
        placeholder="Write task..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        type="text"
        onKeyDown={handleAddTodoEnter}
      />
    </div>
  );
};

export default PostForm;
