import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getName } from 'redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { UserMenuContainer } from './AppBar.styled';
import { logOut } from 'redux/auth/authOperations';
import { LogOutBtn, UserName } from './AppBar.styled';

export default function UserMenu() {
  const userName = useSelector(getName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogOutClick = () => {
    dispatch(logOut());
    navigate('/goit-react-hw-08-phonebook/login');
  };
  return (
    <UserMenuContainer>
      <UserName>{userName}</UserName>
      <LogOutBtn type="button" onClick={onLogOutClick}>
        Log Out
      </LogOutBtn>
    </UserMenuContainer>
  );
}
