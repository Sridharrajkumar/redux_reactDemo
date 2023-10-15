import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { AuthActions } from '../store';

const Header = () => {

  const AuthSelector = useSelector(state => state.auth.isLogged);
  const dispatch = useDispatch();

  const LogOutHandler = () => {
    dispatch(AuthActions.logOut())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {AuthSelector && <li>
            <a href='/'>My Products</a>
          </li>}
          {AuthSelector && <li>
            <a href='/'>My Sales</a>
          </li>}
          {AuthSelector && <li>
            <button onClick={LogOutHandler}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
