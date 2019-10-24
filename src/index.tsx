import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/main.reducer';
import { MainStore, CreateStore } from './store/main.strore';
import rootEpic from './epics';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));

epicMiddleware.run(rootEpic);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" render={() => (
          <Redirect to="/campaigns" />
        )} />
        <Route path="/campaigns" exact component={MainStore} />
        <Route path="/create" exact component={CreateStore} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app'),
);