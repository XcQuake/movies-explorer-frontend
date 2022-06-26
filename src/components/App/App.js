import './App.css';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as MainApi from '../../utils/MainApi';
import * as MoviesApi from '../../utils/MoviesApi';
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
import Popup from '../Popup/Popup';
import MoviesFilter from '../../utils/MoviesFilter';
import FilterCheckbox from '../Buttons/FilterCheckbox/FilterCheckbox';

export default function App() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const [mainApiError, setMainApiError] = useState('');
  const [searchProps, setSearchProps] = useState({
    keyWord: '',
    isShortFilms: false,
  });
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    username: '',
    email: '',
  });
  const [popupState, setPopupState] = useState({
    isActive: false,
    message: '',
  });
  const history = useHistory();

  function handleBurgerClick() {
    setIsNavigationOpen(!isNavigationOpen);
  };

  useEffect(() => {
    handleCheckToken();
  }, [isLoggedIn]);

  function handleChangeFilterCheckbox() {
    setSearchProps({...searchProps, isShortFilms: !searchProps.isShortFilms})
  };

  function handleSearchSubmit(keyWord) {
    setSearchProps({...searchProps, keyWord: keyWord})
  };

  // Фильтрация фильмов при изменении параметров поиска
  useEffect(() => {
    const moviesFilter = new MoviesFilter(40);
    function promiseFilterMovies(movies, keyWord) {
      return new Promise((resolve) => {
        const filteredMovies = moviesFilter.filterByName(movies, keyWord);
        resolve(filteredMovies);
      })
    };
    MoviesApi.getMovies()
      .then((movies) => {
        promiseFilterMovies(movies, searchProps.keyWord)
          .then((filteredMovies) => {
            if (searchProps.isShortFilms) { // Короткометражки
              const shortFilms = moviesFilter.filterByDuration(filteredMovies);
              localStorage.setItem('movies', JSON.stringify(shortFilms));
              setSearchedMovies(shortFilms);
            } else { // Полнометражки
              localStorage.setItem('movies', JSON.stringify(filteredMovies));
              setSearchedMovies(filteredMovies)
            }
          })
      })
  }, [searchProps]);

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

  const handleOpenPopup = (text) => {
    setPopupState({
      isActive: true,
      message: text,
    })
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
            <Switch>
              <Route path='/movies'>
                <SearchForm onSubmit={handleSearchSubmit}>
                  <FilterCheckbox
                    isChecked={searchProps.isShortFilms}
                    onChange={handleChangeFilterCheckbox}
                  />
                </SearchForm>
                <Movies searchedMovies={searchedMovies}/>
              </Route>
              <Route path='/saved-movies'>
                <SearchForm />
                <SavedMovies />
              </Route>
              <Route path='/profile'>
                <Profile onSuccesChange={handleOpenPopup} />
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
