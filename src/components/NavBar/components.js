import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 70px;
`

export const StyledTitle = styled.h2`
  font-size: 18px;
  color: #fff;
  font-weight: 400;
  margin-bottom: 0px;
`;

export const StyledWrapperLink = styled.div`
  a {
    margin-left: 10px;
    margin-right: 10px;
    color: ${(props) => props.theme.PRIMARY_TEXT_HEADER_COLOR};
    font-size: 18px;

    &:hover {
      color: ${(props) => props.theme.PRIMARY_TEXT_HOVER_COLOR};
    }

    &:last-child {
      margin-right: 0px;
    }
  }
`;

export const StyledLinkElem = styled(NavLink)`
  &.active {
    color: #fff;
    border-bottom: 2px solid #fff;

    &:hover {
      color: ${(props) => props.theme.PRIMARY_TEXT_HOVER_COLOR};
    }
  }
`
