import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as auth from '../../utils/MainApi';
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

export default function App() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const [mainApiError, setMainApiError] = useState('');
  const [currentUser, setCurrentUser] = useState({
    username: '',
    email: '',
  })

  function handleBurgerClick() {
    setIsNavigationOpen(!isNavigationOpen);
  };

  useEffect(() => {
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
      .then((user) => {
        setCurrentUser({
          username: user.name,
          email: user.email,
        });
        setIsLoggedIn(true);
      })
      .catch((err) => {
        setIsLoggedIn(false);
        setMainApiError(err);
      })
  };

  const handleUpdateProfile = ({username, email}) => {
    auth.updateProfile(username, email)
      .then((user) => {
        setCurrentUser({
          username: user.name,
          email: user.email,
        });
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
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
          <Route path='/signup' component={Register}>
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
              <Profile
                currentUser={currentUser}
                onSubmit={handleUpdateProfile}
              />
            </Route>
          </ProtectedRoute>
          <Route exact path='*' component={NotFound} />
        </Switch>
      </main>
      <Route path='/(|movies|saved-movies)' component={Footer} />
      <Navigation isOpen={isNavigationOpen} />
    </>
  );
}
