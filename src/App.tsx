import Header from 'shared/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Store from 'pages/Store';
import Cart from 'pages/Cart';
import Home from 'pages/Home';
import Checkout from 'pages/Checkout';
import Summary from 'pages/Summary';
import NotFound from 'pages/NotFound';

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/store">
            <Store />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/summary">
            <Summary />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>

          <Redirect to="/404" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
