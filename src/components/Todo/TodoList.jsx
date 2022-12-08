import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import TodoButton from "./TodoButton";

const TodoList = ({ todos }) => {
  const token = localStorage.getItem("accessToken");
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState("");

  const filteredItem = todos.filter((todos) => todos.id === id);
  const handleEdit = (id) => {
    setIsEdit(!isEdit);
    console.log(id);
  };

  const [body, setBody] = useState({
    todo: filteredItem.todo,
    isCompleted: filteredItem.isCompleted,
  });
  console.log(body);
  const onChange = (e, id) => {
    setId(id);
    setBody(
      (prev) => console.log("prev", prev) // { ...prev, todo: e.target.value }
    );
  };
  // const isDone = () => {
  //   setBody({ ...body, isCompleted: !filteredItem.isCompleted });
  // };
  const onSubmit = (id) => {
    axios
      .put(
        `${process.env.REACT_APP_API_BASE_URL}/todos/${id}`,
        { todo: body.todo, isCompleted: body.isCompleted }, //TODO: 내용
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => window.location.reload());
  };
  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_BASE_URL}/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .then(() => window.location.reload());
  };
  return (
    <ListWrapper>
      {todos &&
        todos.map((todo) => (
          <TodoWrapper key={todo.id}>
            <input type="radio" defaultChecked={todo.isCompleted} />
            {isEdit === true ? (
              <div>
                <input
                  type="text"
                  defaultValue={todo.todo}
                  onChange={(e) => {
                    onChange(e, todo.id);
                  }}
                />
              </div>
            ) : (
              <Todo>{todo.todo}</Todo>
            )}

            <Buttons>
              <TodoButton
                keyword={isEdit ? "제출" : "수정"}
                onClick={isEdit ? () => onSubmit(todo.id) : handleEdit(todo.id)}
              />
              <TodoButton
                keyword={isEdit ? "취소" : "삭제"}
                onClick={isEdit ? handleEdit : () => handleDelete(todo.id)}
              />
            </Buttons>
          </TodoWrapper>
        ))}
    </ListWrapper>
  );
};

export default TodoList;

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const TodoWrapper = styled.div`
  display: flex;
  width: 90%;
  border-radius: 5px;
  justify-content: space-around;
  border: 1px solid #333;
  padding: 0.5rem 0.2rem;
  margin-bottom: 0.3rem;
`;

const Todo = styled.div`
  background-color: aliceblue;
  width: 60%;
  padding: 1rem;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
