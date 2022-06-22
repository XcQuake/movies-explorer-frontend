import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as MainApi from '../../utils/MainApi';
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function App() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const [mainApiError, setMainApiError] = useState('');
  const [currentUser, setCurrentUser] = useState({
    username: '',
    email: '',
  });

  function handleBurgerClick() {
    setIsNavigationOpen(!isNavigationOpen);
  };

  useEffect(() => {
    handleCheckToken();
  }, [isLoggedIn]);

  const handleSignIn = (email, password) => {
    MainApi.signIn(email, password)
      .then(() => {
        localStorage.setItem('isTokenExist', true);
        setIsLoggedIn(true);
        handleCheckToken();
        setMainApiError('');
        history.push('/movies');
      })
      .catch((err) => setMainApiError(err))
  };

  const handleSignUp = (username, email, password) => {
    MainApi.signUp(username, email, password)
      .then(() => {
        handleSignIn(email, password);
      })
      .catch((err) => setMainApiError(err))
  };

  const handleCheckToken = () => {
    if (localStorage.getItem('isTokenExist')){
      MainApi.checkToken()
        .then((user) => {
          setCurrentUser({
            username: user.name,
            email: user.email,
          });
          setIsLoggedIn(true);
        })
        .catch((err) => {
          setIsLoggedIn(false);
        })
    } else setIsLoggedIn(false);
  };

  return (
    <CurrentUserContext.Provider value={{userData: currentUser, setCurrentUser}}>
      <Route path='/(|movies|saved-movies|profile)'>
        <Header
          isLoggedIn={isLoggedIn}
          onBurgerClick={handleBurgerClick}
        />
      </Route>
      <main className='main'>
        <Switch>
          <Route path='/signin'>
            <Login
              onSubmit={handleSignIn}
              apiError={mainApiError}
            />
          </Route>
          <Route path='/signup'>
            <Register
              onSubmit={handleSignUp}
              apiError={mainApiError}
            />
          </Route>
          <Route exact path='/'>
            <Main />
          </Route>
          <ProtectedRoute
            isLoggedIn={isLoggedIn}
          >
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
          </ProtectedRoute>
          <Route exact path='*' component={NotFound} />
        </Switch>
      </main>
      <Route path='/(|movies|saved-movies)' component={Footer} />
      <Navigation isOpen={isNavigationOpen} />
    </CurrentUserContext.Provider>
  );
}
