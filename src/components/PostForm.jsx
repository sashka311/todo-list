import React from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import { useState } from "react";

const PostForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  return (
    <div className={"postForm"}>
      <MyInput
        placeholder="Write task..."
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        type="text"
      />
      <MyButton onClick={() => addTodo(newTodo, setNewTodo)}>
        Add new todo
      </MyButton>
    </div>
  );
};

export default PostForm;
