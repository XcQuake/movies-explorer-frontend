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

export default function App() {
  return (
    <>
      <Switch>
        <Route path='/movies'>
          <Header />
          <SearchForm />
          <Movies />
          <Footer />
        </Route>
        <Route path='/saved-movies'>
          <Header />
          <SearchForm />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path='/profile'>
          <Header />
          <Profile />
        </Route>
        <Route path='/signin' component={Login} />
        <Route path='/signup' component={Register} />
        <Route exact path='/'>
          <Header />
          <Main />
          <Footer />
        </Route>
      </Switch>
    </>
  );
}
