import styled from "styled-components";

const Button = ({ keyword, disabled, loginInfo, login }) => {
  const handleLogin = () => {
    // if (loginInfo.email && loginInfo.password) {
    //   let { email, password } = loginInfo;
    //   axios
    //     .post(
    //       `${api}/auth/signin`,
    //       { email: email, password: password },
    //       {
    //         headers: { "Content-Type": "application/json" },
    //       }
    //     )
    //     .then((res) => console.log(res));
    // }
    console.log("login");
  };

  const handleSignUp = () => {
    console.log("회원가입");
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
