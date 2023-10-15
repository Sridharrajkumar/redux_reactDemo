import { useDispatch, useSelector } from 'react-redux';
import classes from './Auth.module.css';
import { AuthActions } from '../store';

const Auth = () => {

  const authSelector = useSelector(state => state.auth.isLogged)
  const dispatch = useDispatch();

  const LoginHandler = (e) => {
    e.preventDefault();
    dispatch(AuthActions.login());
  }


  return (
    <>
      {!authSelector && <main className={classes.auth}>
        <section>
          <form onSubmit={LoginHandler}>
            <div className={classes.control}>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' />
            </div>
            <div className={classes.control}>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' />
            </div>
            <button>Login</button>
          </form>
        </section>
      </main>}
    </>
  );
};

export default Auth;


