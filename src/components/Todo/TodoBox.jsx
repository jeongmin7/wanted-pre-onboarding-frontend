import React from "react";
import styled from "styled-components";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";

const TodoBox = ({ todos }) => {
  console.log(todos);
  return (
    <Wrapper>
      <NewTodo todos={todos} />
      <TodoList todos={todos} />
    </Wrapper>
  );
};

export default TodoBox;

const Wrapper = styled.div`
  width: 45%;
  height: 50%;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;
