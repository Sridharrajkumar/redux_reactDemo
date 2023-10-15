import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile'
import { useSelector } from 'react-redux/es/hooks/useSelector';


function App() {
  const AuthSelector = useSelector(state => state.auth.isLogged);
  return (
    <Fragment>
      <Header />
      <Auth />
      {AuthSelector && <UserProfile />}
      { AuthSelector && <Counter />}
    </Fragment>
  );
}

export default App;
