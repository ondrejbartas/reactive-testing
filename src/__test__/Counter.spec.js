import React from 'react';
import ReactDOM from 'react-dom/server';
import ReactBrowserDOM from 'react-dom';
import test from 'ava';
import { jsdom } from 'jsdom';
import Counter from '../Counter';

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

const renderHtml = counter =>
  ReactDOM.renderToStaticMarkup(
    <Counter counter={counter} />,
    global.document.createElement('div')
  );

test('Counter should render without crash', () =>
  renderHtml()
);

test('Counter should contain Counter', (t) => {
  t.regex(renderHtml(3), /Counter/);
});

test('Counter should contain increment button', (t) => {
  t.regex(renderHtml(3), /\+1\s*<\/button>/);
});

test('Counter should contain counter value', (t) => {
  t.regex(renderHtml(3), /3/);
  t.regex(renderHtml(4), /4/);
  t.regex(renderHtml(105), /105/);
});

test('Counter getSquare returns correct values', (t) => {
  const getSquare = counter =>
    ReactBrowserDOM.render(
      <Counter counter={counter} />,
      global.document.createElement('div')
    ).getSquare();

  t.is(getSquare(0), 0);
  t.is(getSquare(5), 25);
  t.is(getSquare(10), 100);
});
