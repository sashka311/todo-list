import React from "react";
import PostItem from "./PostItem";
import PostForm from "./PostForm";

const PostList = ({
  addTodo,
  remove,
  checkTodo,
  isChecked,
  setIsChecked,
  setTodoList,
  todoList,
}) => {
  return (
    <div className={"todoList"}>
      {todoList.map((elem, index) => (
        <PostItem
          checkTodo={checkTodo}
          todo={elem}
          remove={remove}
          key={elem.id}
          inner={elem.inner}
          isChecked={elem.isChecked}
          index={index}
          setTodoList={setTodoList}
          todoList={todoList}
        />
      ))}
      <PostForm
        todoList={todoList}
        setTodoList={setTodoList}
        addTodo={addTodo}
      />
    </div>
  );
};

export default PostList;
