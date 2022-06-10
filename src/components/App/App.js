import './App.css';
import { Route, Switch } from 'react-router-dom';
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
import { useState } from 'react';

export default function App() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  function handleBurgerClick() {
    setIsNavigationOpen(!isNavigationOpen);
  };

  return (
    <>
      <Route path='/signin' component={Login} />
      <Route path='/signup' component={Register} />
      <Route path='/(movies|saved-movies|profile)'>
        <Header
          onBurgerClick={handleBurgerClick}
        />
      </Route>
      <Route path='(movies|saved-movies)' component={SearchForm} />
      <Switch>
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
          <Header />
          <Main />
        </Route>
      </Switch>
      <Route path='/(|movies|saved-movies)' component={Footer} />
      <Navigation isOpen={isNavigationOpen} />
    </>
  );
}
