import styled from 'styled-components';

export const StyledWrapper = styled.div`
  border-left: 2px solid #505050;
  padding-bottom: 25px;
  max-width: 230px;
  width: 100%;
`;

export const StyledHistory = styled.div`
  padding: 0px 25px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 600px;
  height: 100%;

  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #505050;
    border-radius: 24px;
  }
`;

export const StyledItem = styled.li`
  list-style: none;
  margin-top: 10px;
  font-size: 15px;
  font-weight: 500;
`;