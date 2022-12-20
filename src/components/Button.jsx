import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = ({ disabled, loginInfo, login }) => {
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
        .then(() => window.location.reload())
        .catch((err) => alert(err.response.data.message));
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
        .then(() => alert("회원가입이 완료되었습니다!"))
        .then(() => navigate("/"))
        .catch((err) => alert(err.response.data.message));
    }
  };
  return (
    <div>
      <Btn
        disabled={disabled}
        onClick={login === true ? () => handleLogin() : () => handleSignUp()}
      >
        {login ? "로그인" : "회원가입"}
      </Btn>
    </div>
  );
};

export default Button;

const Btn = styled.button`
  width: 100%;
  background-color: #6c4ab6;
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
