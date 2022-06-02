import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import SearchForm from '../SearchForm/SearchForm';
import Profile from '../Profile/Profile';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/movies'>
          <SearchForm />
          <Movies />
          <Footer />
        </Route>
        <Route path='/saved-movies'>
          <SearchForm />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/'>
          <Main />
          <Footer />
        </Route>
      </Switch>
    </>
  );
}
