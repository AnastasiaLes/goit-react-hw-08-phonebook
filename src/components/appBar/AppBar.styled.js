import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const navigation = styled.nav`
  color: red;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  margin: 16px;
  padding: 5px;
  color: black;
  font-weight: 700;

  /* border: 2px solid lightgray; */
  /* border-radius: 5px; */
  /* background-color: lightgray; */

  :hover {
    color: grey;
  }
  &.active {
    color: red;
  }
`;

export const AppBarContainer = styled.div`
  border-bottom: 1px solid gray;
  background-color: lightgray;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserMenuContainer = styled.div`
  display: flex;
  grid: 16px;
`;
