import './App.css';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as MainApi from '../../utils/MainApi';
import { getAllMovies } from '../../utils/MoviesApi';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Navigation from '../Navigation/Navigation';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Popup from '../Popup/Popup';
import { POPUP_MESSAGES } from '../../utils/constants';
import { transformMovies } from '../../utils/utils';

export default function App() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const [mainApiError, setMainApiError] = useState('');
  const [currentUser, setCurrentUser] = useState({
    username: '',
    email: '',
    id: '',
  });
  const [popupState, setPopupState] = useState({
    isActive: false,
    message: '',
  });
  const [savedMovies, setSavedMovies] = useState([]);
  const history = useHistory();

  // сохраняет все фильмы с BeatFilm в localStorage
  useEffect(() => {
    handleCheckToken();
    if (isLoggedIn) {
      getAllMovies()
        .then((movies) => {
          const tranformedMovies = transformMovies(movies);
          localStorage.setItem('allMovies', JSON.stringify(tranformedMovies));
        })
        .catch(() => handleOpenPopup(POPUP_MESSAGES.movies.error))
    }
  }, [isLoggedIn]);

  // сохраняет в стейт все фильмы, сохранённые текущим пользователем
  useEffect(() => {
    if (isLoggedIn) {
      MainApi.getSavedMovies()
      .then(movies => setSavedMovies(
        movies.filter(movie => movie.owner === currentUser.id)
      ))
      .catch(() => handleOpenPopup(POPUP_MESSAGES.savedMovies.error))
    }
  }, [isLoggedIn, currentUser])

// Функции аутентификации
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

  const handleSignOut = (evt) => {
    evt.preventDefault();
    localStorage.removeItem('isTokenExist');
    localStorage.removeItem('allMovies');
    localStorage.removeItem('searchedMovies');
    localStorage.removeItem('keyWord');
    localStorage.removeItem('isShortMovies');
    setIsLoggedIn(false);
    setCurrentUser({});
    MainApi.signOut()
      .catch((err) => console.log(err))
  };

  const handleCheckToken = () => {
    if (localStorage.getItem('isTokenExist')){
      MainApi.checkToken()
        .then((user) => {
          setCurrentUser({
            username: user.name,
            email: user.email,
            id: user._id
          });
          setIsLoggedIn(true);
        })
        .catch(() => {
          setIsLoggedIn(false);
        })
    } else setIsLoggedIn(false);
  };

// Функции интерфейса
  const handleOpenPopup = (text) => {
    setPopupState({
      isActive: true,
      message: text,
    })
  };

  function handleBurgerClick() {
    setIsNavigationOpen(!isNavigationOpen);
  };

  return (
    <CurrentUserContext.Provider value={{
      userData: currentUser,
      setCurrentUser,
      savedMovies: savedMovies,
      setSavedMovies,
    }}>
      <Route path='/(|movies|saved-movies|profile)'>
        <Header
          isLoggedIn={isLoggedIn}
          onBurgerClick={handleBurgerClick}
        />
      </Route>
      <main className='main'>
        <Switch>
          <Route path='/signin'>
            {
              !isLoggedIn
              ? <Login
                  onSubmit={handleSignIn}
                  apiError={mainApiError}
                />
              : <Redirect to='/movies' />
            }
          </Route>
          <Route path='/signup'>
            {
              !isLoggedIn
              ? <Register
                  onSubmit={handleSignUp}
                  apiError={mainApiError}
                />
              : <Redirect to='/movies' />
            }
          </Route>
          <Route exact path='/'>
            <Main />
          </Route>
          <ProtectedRoute
            isLoggedIn={isLoggedIn}
          >
            <Switch>
              <Route path='/movies'>
                <Movies onError={handleOpenPopup} />
              </Route>
              <Route path='/saved-movies'>
                <SavedMovies />
              </Route>
              <Route path='/profile'>
                <Profile onSuccesChange={handleOpenPopup} onSignOut={handleSignOut}/>
              </Route>
              <Route path='/404' component={NotFound} />
              <Redirect to='/404' />
            </Switch>
          </ProtectedRoute>
        </Switch>
      </main>
      <Route path='/(|movies|saved-movies)' component={Footer} />
      <Navigation isOpen={isNavigationOpen} />
      <Popup isActive={popupState.isActive} setState={setPopupState} message={popupState.message}/>
    </CurrentUserContext.Provider>
  );
}
