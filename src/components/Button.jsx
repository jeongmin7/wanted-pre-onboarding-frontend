import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { api } from "../api/index";

const Button = ({ keyword, disabled, loginInfo, login }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    if (loginInfo.email && loginInfo.password) {
      let { email, password } = loginInfo;
      axios
        .post(
          `${process.env.REACT_APP_API_BASE_URL}/auth/signin`,
          { email: email, password: password },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) =>
          localStorage.setItem("accessToken", res.data.access_token)
        )
        .then(() => navigate("/todo"));
    }
  };

  const handleSignUp = () => {
    if (loginInfo.email && loginInfo.password) {
      let { email, password } = loginInfo;

      axios
        .post(
          `${process.env.REACT_APP_API_BASE_URL}/auth/signup`,
          { email: email, password: password },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then(() => alert("회원가입이 완료되었습니다!"));
    }
  };
  return (
    <div>
      <Btn
        disabled={disabled}
        onClick={login === true ? () => handleLogin() : () => handleSignUp()}
      >
        {keyword}
      </Btn>
    </div>
  );
};

export default Button;

const Btn = styled.button`
  width: 100%;
  background-color: #1515ff;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  padding: 1rem 3rem;
  border-radius: 5px;
  border: none;
  margin: 10px;
  :disabled {
    background-color: #adadad;
  }
`;
