import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './components/App/App.jsx';
import '../styles/main.scss';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App store={store} />
    </Provider>,
    document.getElementById('app'),
  );
};

document.addEventListener('DOMContentLoaded', render);

store.subscribe(render);