import styled from "styled-components";

export const StyledDisplay = styled.input`
  border: none;
  outline: none;
  border-bottom: 2px solid #505050;
  height: 80px;
  padding: 0px 50px;
  text-align: right;
  font-size: 32px;
  font-weight: 500;

  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  width: 100%;

  &::placeholder {
    color: #000;
  }
`;