import styled from "styled-components";

const LoginStatus = ({ login, setLogin }) => {
  const handleSignUp = () => {
    setLogin(!login);
  };

  return (
    <Wrapper>
      <Mode>{login === true ? "로그인" : "회원가입"}</Mode>
      <TheOtherMode onClick={handleSignUp}>
        {login === true ? "회원가입" : "로그인"}
      </TheOtherMode>
    </Wrapper>
  );
};

export default LoginStatus;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1rem;
`;
const Mode = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;
const TheOtherMode = styled.div`
  color: #656565;
  font-weight: 700;
  text-decoration: underline;
`;
