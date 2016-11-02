import React from 'react';
import ReactDOM from 'react-dom';
import test from 'ava';
import { jsdom } from 'jsdom';
import { Provider } from 'react-redux';
import CounterPage from '../CounterPage';
import createStore from '../createStore';

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

const renderHtml = initial =>
  ReactDOM.render(
    <Provider store={createStore(initial)}>
      <CounterPage />
    </Provider>,
    global.document.createElement('div')
  );

test('Counter Page should render', () => {
  renderHtml();
});
