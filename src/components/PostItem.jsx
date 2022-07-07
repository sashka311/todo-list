import React, { useState } from "react";

const PostItem = ({
  inner,
  remove,
  todo,
  isChecked,
  checkTodo,
  index,
  setTodoList,
  todoList,
}) => {
  return (
    <div className="todoItem">
      <div
        className={isChecked ? "checkTodoCompleted" : "checkTodo"}
        onClick={() => {
          checkTodo(todo, isChecked, index, setTodoList, todoList);
        }}
      ></div>
      <div
        className={isChecked ? "todoInner todoInnerComplete" : "todoInner  "}
      >
        {inner}
      </div>
      <button
        className="deleteTodoButton"
        onClick={() => remove(todo, setTodoList, todoList)}
      >
        X
      </button>
    </div>
  );
};

export default PostItem;
