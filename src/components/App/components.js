import styled from 'styled-components';

export const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
`;

export const StyledMain = styled.main`
  padding: 15px 0px;
`;
