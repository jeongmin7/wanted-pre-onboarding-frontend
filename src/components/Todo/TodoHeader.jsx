import React from "react";
import styled from "styled-components";

const TodoHeader = () => {
  const token = localStorage.getItem("accessToken");
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };
  return (
    <Wrapper>
      <div>Jeongmin's</div>
      {token ? <div onClick={handleLogout}>Logout</div> : ""}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-size: 1.9rem;
  font-weight: 700;
  font-family: "Nerko One", cursive;
`;
export default TodoHeader;
