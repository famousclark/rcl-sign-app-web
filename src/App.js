import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Redux
import {createStore, applyMiddleware} from 'redux';
import {configureStore, sagaMiddleWare} from './store/ConfigureStore';
import {Provider} from 'react-redux';

// Sagas
import rootSaga from './middleware/Saga.js';

// Styles
import * as ux from './styles/Styles';

// Containers
import AppRoot from './containers/AppRoot';

const store = configureStore();

sagaMiddleWare.run(rootSaga);

class App extends Component {
  render() {

    /*const original = (
      <div className="App">
      <ux.globalContainer>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit { <code>src/App.js</code> }
          and save to reload.
        </p>
      </ux.globalContainer>
    </div>
  );*/

    return (
      <Provider store={store}>
        <AppRoot/>
      </Provider>
    );
  }
}

export default App;
