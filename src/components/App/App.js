import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/movies'>
          <SearchForm />
          <Movies />
        </Route>
        <Route exact path='/'>
          <Main />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}
