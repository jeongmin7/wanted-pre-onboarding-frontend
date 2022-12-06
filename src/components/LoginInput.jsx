import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { api } from "../api/index";
import Button from "./Button";
import { BiUser } from "react-icons/bi";
import { MdOutlinePassword } from "react-icons/md";
import LoginStatus from "./LoginStatus";

const LoginInput = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [login, setLogin] = useState(true);

  // const handleLogin = () => {
  //   if (loginInfo.email && loginInfo.password) {
  //     let { email, password } = loginInfo;
  //     axios
  //       .post(
  //         `${api}/auth/signin`,
  //         { email: email, password: password },
  //         {
  //           headers: { "Content-Type": "application/json" },
  //         }
  //       )
  //       .then((res) => console.log(res));
  //   }
  // };

  // const handleSignUp = () => {
  //   console.log("회원가입");
  // };

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
    const emailRegex = /@/;
    if (!emailRegex.test(loginInfo.email)) {
      setEmailError("이메일 형식을 확인해 주세요");
    } else {
      setEmailError("");
      setValidEmail(true);
    }
    const passwordRegex = /.{7,}/;
    if (!passwordRegex.test(loginInfo.password)) {
      setPasswordError("비밀번호는 8자 이상이어야 합니다.");
    } else {
      setPasswordError("");
      setValidPassword(true);
    }
  };

  return (
    <Wrapper>
      <LoginStatus login={login} setLogin={setLogin} />
      <InputContainer>
        <BiUser />
        <Input
          type="email"
          placeholder="이메일을 입력해주세요"
          onChange={handleInputValue("email")}
        />
      </InputContainer>
      <ErrorMessage>{loginInfo.email ? emailError : ""}</ErrorMessage>
      <InputContainer>
        <MdOutlinePassword />
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={handleInputValue("password")}
        />
      </InputContainer>
      <ErrorMessage>{loginInfo.password ? passwordError : ""}</ErrorMessage>
      <ButtonContainer>
        <Button
          keyword={login === true ? "로그인" : "회원가입"}
          disabled={!validEmail || !validPassword}
          loginInfo={loginInfo}
          login={login}
          // onClick={login === true ? handleLogin() : handleSignUp()}
        ></Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default LoginInput;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ButtonContainer = styled.div`
  display: flex;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: #fafafa;
  padding: 0.5rem 1.5rem;
  font-size: 1.5rem;
`;
const Input = styled.input`
  padding: 1rem;
  border-radius: 10px;
  background-color: #fafafa;
  border: none;
  font-size: 1rem;
`;
const ErrorMessage = styled.div`
  font-size: 0.9rem;
  color: #dd4b39;
  padding: 0.5rem;
`;
