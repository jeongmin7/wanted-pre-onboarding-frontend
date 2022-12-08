import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const Todo = ({ todo, token, setTodos, todos }) => {
  const [editMode, setEditMode] = useState(false);
  const [changedTodo, setChangedTodo] = useState(todo.todo);
  const handleEditMode = () => {
    setEditMode(!editMode);
  };
  const onChange = (e) => {
    setChangedTodo(e.target.value);
  };
  const deleteTodo = async (id) => {
    await axios
      .delete(`${process.env.REACT_APP_API_BASE_URL}/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)));
    // .catch((err) => alert(err.response.data.message));
  };

  const updateTodo = async (id) => {
    await axios
      .put(
        `${process.env.REACT_APP_API_BASE_URL}/todos/${id}`,
        { todo: changedTodo, isCompleted: todo.isCompleted },

        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        setTodos(
          todos.map((todo) =>
            id === todo.id
              ? { ...todo, todo: changedTodo, isCompleted: todo.isCompleted }
              : todo
          )
        );
      })
      .then(() => {
        setEditMode(!editMode);
      })
      .catch((err) => alert(err.response.data.message));
  };
  console.log(todos);
  const updateIsCompleted = async (id) => {
    await axios
      .put(
        `${process.env.REACT_APP_API_BASE_URL}/todos/${id}`,
        { todo: todo.todo, isCompleted: !todo.isCompleted },

        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .catch((err) => alert(err.response.data.message));
  };
  return (
    <div>
      {editMode ? (
        <Wrapper>
          <input
            type="checkbox"
            defaultChecked={todo.isCompleted}
            onClick={() => {
              updateIsCompleted(todo.id);
            }}
          />
          <ContentWrapper>
            <Input type="text" defaultValue={todo.todo} onChange={onChange} />
            <ButtonsWrapper>
              <Button onClick={() => updateTodo(todo.id)}>확인</Button>
              <Button onClick={handleEditMode}>취소</Button>
            </ButtonsWrapper>
          </ContentWrapper>
        </Wrapper>
      ) : (
        <Wrapper>
          <input
            type="checkbox"
            defaultChecked={todo.isCompleted}
            onClick={() => {
              updateIsCompleted(todo.id);
            }}
          />
          <ContentWrapper>
            {todo.isCompleted === true ? (
              <IsDone>{todo.todo}</IsDone>
            ) : (
              <div>{todo.todo}</div>
            )}
            <ButtonsWrapper>
              <Button onClick={handleEditMode}>수정</Button>
              <Button onClick={() => deleteTodo(todo.id)}>삭제</Button>
            </ButtonsWrapper>
          </ContentWrapper>
        </Wrapper>
      )}
    </div>
  );
};

export default Todo;
const Wrapper = styled.div`
  width: 25rem;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  font-size: 1.5rem;
`;

const ContentWrapper = styled.div`
  border: 1px solid #333;
  border-radius: 5px;
  display: flex;
  width: 80%;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
`;
const Button = styled.div`
  margin-right: 0.3rem;
  border-radius: 5px;
  padding: 0.3rem;
  background-color: #8d72e1;
  color: #fff;
`;
const Input = styled.input`
  height: 1.3rem;
`;
const IsDone = styled.div`
  text-decoration: line-through;
`;
