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
//Assignment1
// 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
// 이메일 조건: @ 포함
// 비밀번호 조건: 8자 이상
// 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 되도록 해주세요
// 보안 상 실제 사용하고 계신 이메일과 패스워드말고 테스트용 이메일, 패스워드 사용을 권장드립니다.
// Assignment2
// 로그인 API를 호출하고, 올바른 응답을 받았을 때 /todo 경로로 이동해주세요
// 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
// 응답받은 JWT는 로컬 스토리지에 저장해주세요
// Assignment3
// 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
// 로컬 스토리지에 토큰이 있는 상태로 / 페이지에 접속한다면 /todo 경로로 리다이렉트 시켜주세요
// 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 / 경로로 리다이렉트 시켜주세요
