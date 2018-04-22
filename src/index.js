import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import MainPage from './components/MainPage';
import TopNavbar from './components/TopNavbar';
import PBFooter from './components/PBFooter';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(<TopNavbar />, document.getElementById('navbar'));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={MainPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container-main'));

  ReactDOM.render(<PBFooter />, document.getElementById('footer'));
