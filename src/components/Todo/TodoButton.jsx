import React from "react";
import styled from "styled-components";

const TodoButton = ({ keyword, padding, fontSize, onClick }) => {
  return (
    <div>
      <Button padding={padding} fontSize={fontSize} onClick={onClick}>
        {keyword}
      </Button>
    </div>
  );
};

export default TodoButton;

const Button = styled.button`
  background-color: #6c4ab6;
  color: #fff;
  border: none;
  padding: ${(props) => props.padding || ".7rem"};
  margin-left: 0.3rem;
  border-radius: 5px;
  font-weight: 700;
  font-size: ${(props) => props.fontSize || "1rem"}; ;
`;
