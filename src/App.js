import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import logo from './logo.svg';
import CounterPage from './CounterPage';
import createStore from './createStore';

const store = createStore({ counter: 5 });

const App = () => (
  <Provider store={store}>
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <CounterPage />
    </div>
  </Provider>
);

export default App;
