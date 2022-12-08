import axios from "axios";
import React, { useState } from "react";

const Todo = ({ todo, token }) => {
  const [editMode, setEditMode] = useState(false);
  const [changedTodo, setChangedTodo] = useState(todo.todo);
  console.log(todo);
  console.log(todo.isCompleted);
  const handleEditMode = () => {
    setEditMode(!editMode);
  };
  const onChange = (e) => {
    setChangedTodo(e.target.value);
  };
  const deleteTodo = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_BASE_URL}/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .then(() => window.location.reload());
  };

  const updateTodo = (id) => {
    axios
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
        window.location.reload();
      })
      .then(() => window.location.reload());
  };
  const updateIsCompleted = (id) => {
    axios
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
      .then(() => window.location.reload());
  };
  return (
    <div>
      {editMode ? (
        <div>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onClick={() => {
              updateIsCompleted(todo.id);
            }}
          />
          <input type="text" defaultValue={todo.todo} onChange={onChange} />
          <button onClick={() => updateTodo(todo.id)}>확인</button>
          <button onClick={handleEditMode}>취소</button>
        </div>
      ) : (
        <div>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onClick={() => {
              updateIsCompleted(todo.id);
            }}
          />
          <div>{todo.todo}</div>
          <button onClick={handleEditMode}>수정</button>
          <button onClick={() => deleteTodo(todo.id)}>삭제</button>
        </div>
      )}
    </div>
  );
};

export default Todo;
