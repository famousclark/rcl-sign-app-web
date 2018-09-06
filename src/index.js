/**
* LSF - ASL React Web App
* @flow
*/

// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { configureStore, sagaMiddleWare } from './store/ConfigureStore';
import { Provider } from 'react-redux';

// Sagas
import rootSaga from './middleware/Saga.js';

import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
