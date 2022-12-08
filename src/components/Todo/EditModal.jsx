import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const EditModal = ({ todo, isOpen, setIsOpen, body }) => {
  const token = localStorage.getItem("accessToken");
  const [newTodo, setNewTodo] = useState(todo.todo);
  const onSubmit = (id) => {
    axios
      .put(
        `${process.env.REACT_APP_API_BASE_URL}/todos/${id}`,
        { ...body, todo: newTodo }, //TODO: 내용
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => window.location.reload());
  };
  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  const changedTodo = (e) => {
    setNewTodo(e.target.value);
  };
  return (
    <Container>
      <input type="text" defaultValue={todo[0].todo} onChange={changedTodo} />
      <button onClick={onSubmit}>제출 </button>
      <button onClick={handleModal}>취소</button>
    </Container>
  );
};

export default EditModal;
const Container = styled.div`
  /* 모달창 크기 */
  width: 20rem;
  height: 20rem;

  /* 최상단 위치 */
  z-index: 999;

  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 모달창 디자인 */
  background-color: #caa8ff;
  border: none;
  border-radius: 5px;
`;
