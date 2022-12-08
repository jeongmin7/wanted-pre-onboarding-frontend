import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import TodoButton from "./TodoButton";

const NewTodo = () => {
  const token = localStorage.getItem("accessToken");
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_BASE_URL}/todos`,
        { todo: todo }, //TODO: 내용
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => window.location.reload());
  };
  return (
    <Wrapper>
      <Input type="text" onChange={handleChange} />
      <TodoButton
        keyword="추가"
        padding={".7rem 1.4rem"}
        fontSize={"1.1rem"}
        onClick={handleAdd}
      />
    </Wrapper>
  );
};

export default NewTodo;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  width: 60%;
  height: 2.5rem;
`;
