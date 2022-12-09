import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoBox from "../components/Todo/TodoBox";
import styled from "styled-components";
import axios from "axios";

const Todo = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/wanted-pre-onboarding-frontend");
    }
  }, [navigate]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/todos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setTodos(res.data));
  }, [token]);

  return (
    <Wrapper>
      <TodoBoxWrapper>
        <TodoBox todos={todos} setTodos={setTodos} />
      </TodoBoxWrapper>
    </Wrapper>
  );
};

export default Todo;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoBoxWrapper = styled.div`
  margin-top: 5rem;
`;
