import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/movies'>
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
