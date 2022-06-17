import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import SearchForm from '../SearchForm/SearchForm';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Navigation from '../Navigation/Navigation';
import NotFound from '../NotFound/NotFound';
import * as auth from '../../utils/MainApi';

export default function App() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mainApiError, setMainApiError] = useState('');

  function handleBurgerClick() {
    setIsNavigationOpen(!isNavigationOpen);
  };

  useEffect(() => {
    if (isLoggedIn) {
      console.log('logged in');
      return;
    }
    handleCheckToken();
  }, [isLoggedIn]);

  const handleSignIn = (email, password) => {
    auth.signIn(email, password)
      .then((data) => {
        setIsLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => setMainApiError(err))
  };

  const handleSignUp = (username, email, password) => {
    auth.signUp(username, email, password)
      .then((data) => {
        handleSignIn(email, password);
      })
      .catch((err) => setMainApiError(err))
  };

  const handleCheckToken = () => {
    auth.checkToken()
      .then(() => setIsLoggedIn(true))
      .catch((err) => setMainApiError(err))
  };

  return (
    <>
      <Route path='/(|movies|saved-movies|profile)'>
          <Header
            onBurgerClick={handleBurgerClick}
          />
        </Route>
      <Switch>
        <Route path='/signin'>
          <Login
            onSubmit={handleSignIn}
            apiError={mainApiError}
          />
        </Route>
        <Route path='/signup' component={Register}>
          <Register
            onSubmit={handleSignUp}
            apiError={mainApiError}
          />
        </Route>
        <Route path='/movies'>
          <SearchForm />
          <Movies />
        </Route>
        <Route path='/saved-movies'>
          <SearchForm />
          <SavedMovies />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route exact path='*' component={NotFound} />
      </Switch>
      <Route path='/(|movies|saved-movies)' component={Footer} />
      <Navigation isOpen={isNavigationOpen} />
    </>
  );
}
