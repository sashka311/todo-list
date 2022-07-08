import React, { useEffect } from "react";

const PostItem = ({
  inner,
  removeTodo,
  todo,
  isChecked,
  checkTodo,
  index,
  folderIndex,
}) => {
  const handleCheckBoxClick = (e) => {
    checkTodo(index, folderIndex);
  };

  const handleRemoveTodoClick = (e) => {
    removeTodo(todo, folderIndex);
  };
  useEffect(() => {
    if (!todo.inner) {
      removeTodo(todo, folderIndex);
    }
  }, [todo]);
  return (
    <div className="todoItem">
      <div
        className={isChecked ? "checkTodoCompleted" : "checkTodo"}
        onClick={handleCheckBoxClick}
      ></div>
      <div
        className={isChecked ? "todoInner todoInnerComplete" : "todoInner  "}
      >
        {inner}
      </div>
      <div className="deleteTodoButton" onClick={handleRemoveTodoClick}></div>
    </div>
  );
};

export default PostItem;
