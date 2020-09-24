import React from 'react';
import {render} from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import { rootReduser } from './redux/rootReducer';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReduser, compose(applyMiddleware(thunk)))

store.subscribe( () => {
  localStorage['reduxState'] = JSON.stringify(store.getState().theme)
})

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)

render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
