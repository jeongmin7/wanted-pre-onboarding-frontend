import React from "react";
import styled from "styled-components";
import LoginInput from "./LoginInput";

const Login = () => {
  return (
    <Wrapper>
      <LoginInput />
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 28rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 8px 8px 10px #d0d0d0;
  margin-top: 2rem;
`;
