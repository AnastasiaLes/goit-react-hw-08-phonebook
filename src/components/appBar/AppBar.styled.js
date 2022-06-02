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
  /* font-weight: 700; */
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;

  :hover {
    color: #191970;
  }
  &.active {
    color: #191970;
  }
`;

export const AppBarContainer = styled.div`
  border-bottom: 1px solid gray;
  background-color: #778899;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserMenuContainer = styled.div`
  display: flex;
`;

export const LogOutBtn = styled.button`
  padding: 10px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #87ceeb;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  margin-right: 20px;
`;

export const UserName = styled.p`
  display: flex;
  /* grid: 16px; */
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 20px;
  font-weight: 700;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
`;
