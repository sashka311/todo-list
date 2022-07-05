import React from "react";
import PostItem from "./PostItem";
import PostForm from "./PostForm";

const PostList = ({
  list,
  addTodo,
  remove,
  checkTodo,
  isChecked,
  setIsChecked,
}) => {
  return (
    <div>
      {list.map((elem, index) => (
        <PostItem
          checkTodo={checkTodo}
          todo={elem}
          remove={remove}
          key={elem.id}
          inner={elem.inner}
          isChecked={elem.isChecked}
          index={index}
        />
      ))}
      <PostForm addTodo={addTodo} />
    </div>
  );
};

export default PostList;
