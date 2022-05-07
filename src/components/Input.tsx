import styled from '@emotion/styled';

// TODO : Theme -> Color
const Input = styled.input`
  color: black;
  height: 52px;
  padding: 0 0 8px;
  font-weight: 500;
  font-size: 30px;
  border-radius: 1px;
  caret-color: red;
  outline: none;
  border: 0 none;
  border-bottom: 2px solid red;
  :focus {
    border-bottom-color: red;
  }
  transition: background-color 0.2s ease;
`;

export default Input;
