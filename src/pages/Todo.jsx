import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoBox from "../components/Todo/TodoBox";
import styled from "styled-components";
import axios from "axios";
import TodoHeader from "../components/Todo/TodoHeader";

const Todo = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/wanted-pre-onboarding-frontend");
    }
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/todos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setTodos(res.data));
  }, []);

  return (
    <Wrapper>
      <TodoHeader />
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
  font-family: "Nanum Pen Script", cursive;
`;

const TodoBoxWrapper = styled.div`
  margin-top: 5rem;
`;

// :: 2. 투두 리스트
// Assignment4
// /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
// 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시되어야 합니다.
// 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가되도록 해주세요
// Assignment5
// 투두 리스트의 수정, 삭제 기능을 구현해주세요
// 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정할 수 있도록 해주세요
// 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소할 수 있도록 해주세요
// 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제되도록 해주세요
