import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import store from './redux/store';
import Login from './pages/Login';
import Game from './pages/Game';

export default function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/Game" component={ Game } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
