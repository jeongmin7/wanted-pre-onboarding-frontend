import React from "react";
import styled from "styled-components";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";

const TodoBox = ({ todos }) => {
  return (
    <Wrapper>
      <Title>Todo List</Title>
      <NewTodo />
      <TodoList todos={todos} />
    </Wrapper>
  );
};

export default TodoBox;

const Wrapper = styled.div`
  width: 30rem;
  height: 100vh;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;
const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  font-family: "Nerko One", cursive;
`;
