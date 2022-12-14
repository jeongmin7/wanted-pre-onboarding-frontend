import styled from "styled-components";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  const token = localStorage.getItem("accessToken");

  return (
    <ListWrapper>
      {todos &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            token={token}
            todos={todos}
            setTodos={setTodos}
          />
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
