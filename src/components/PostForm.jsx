import React from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import { useState } from "react";

const PostForm = ({ addTodo, setTodoList, todoList }) => {
  const [newTodo, setNewTodo] = useState("");
  return (
    <div className={"postForm"}>
      <MyInput
        placeholder="Write task..."
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        type="text"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            addTodo(newTodo, setNewTodo, setTodoList, todoList);
          }
        }}
      />
    </div>
  );
};

export default PostForm;
