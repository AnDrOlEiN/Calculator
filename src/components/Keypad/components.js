import styled from "styled-components";

export const StyledKeypad = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 80px);
  grid-column-gap: 70px;
  grid-row-gap: 30px;
  margin-top: 30px;
  justify-content: center;
`;

export const StyledButton = styled.button`
  border: 1px solid #505050;
  user-select: none;
  outline: 0;
  border-radius: 10px;
  font-size: 32px;
  font-weight: 500;
  color: #000;
  cursor: pointer;
  height: 80px;
  transition: all .3s;

  &:hover {
    background-color: #aaa7a7;
    border: 2px solid #505050;
  }
`;
