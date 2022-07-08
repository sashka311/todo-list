import React from "react";
import PostItem from "./PostItem";
import PostForm from "./PostForm";

const PostList = ({
  addTodo,
  removeTodo,
  checkTodo,
  todoList,
  folderIndex,
}) => {
  return (
    <div className={"todoList"}>
      {todoList.map((elem, index) => (
        <PostItem
          checkTodo={checkTodo}
          todo={elem}
          removeTodo={removeTodo}
          key={elem.id}
          inner={elem.inner}
          isChecked={elem.isChecked}
          index={index}
          folderIndex={folderIndex}
        />
      ))}
      <PostForm
        todoList={todoList}
        addTodo={addTodo}
        folderIndex={folderIndex}
      />
    </div>
  );
};

export default PostList;
