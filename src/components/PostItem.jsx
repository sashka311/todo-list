import React, { useState } from "react";

const PostItem = ({ inner, remove, todo, isChecked, checkTodo, index }) => {
  return (
    <div className="todoItem">
      <div
        className={isChecked ? "checkTodoCompleted" : "checkTodo"}
        onClick={() => {
          checkTodo(todo, isChecked, index);
        }}
      ></div>
      <div
        className={isChecked ? "todoInner todoInnerComplete" : "todoInner  "}
      >
        {inner}
      </div>
      <button className="deleteTodoButton" onClick={() => remove(todo)}>
        X
      </button>
    </div>
  );
};

export default PostItem;
