import axios from "axios";
import styled from "styled-components";
import TodoButton from "./TodoButton";

const TodoList = ({ todos }) => {
  const token = localStorage.getItem("accessToken");

  const handleEdit = () => {
    console.log("edit");
  };
  const handleDelete = () => {
    // axios
    //   .delete(`${process.env.REACT_APP_API_BASE_URL}/todos/${todos.id}`, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then((res) => console.log(res));
  };
  return (
    <div>
      {todos &&
        todos.map((todo) => (
          <Wrapper key={todo.id}>
            <input type="radio" defaultChecked={todo.isCompleted} />
            <Todo>{todo.todo}</Todo>
            <Buttons>
              <TodoButton keyword={"수정"} onClick={handleEdit} />
              <TodoButton keyword={"삭제"} onClick={handleDelete} />
            </Buttons>
          </Wrapper>
        ))}
    </div>
  );
};

export default TodoList;

const Wrapper = styled.div`
  display: flex;
  border-radius: 5px;
  padding: 1rem;
  justify-content: space-around;
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
