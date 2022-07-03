import React from "react";
import PostItem from "./PostItem";

const PostList = ({ list, remove, checkTodo, isChecked, setIsChecked }) => {
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
    </div>
  );
};

export default PostList;
