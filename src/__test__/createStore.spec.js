import test from 'ava';
import createAppStore, { reducer } from '../createStore';

test('Reducer returns initial state on first call', t =>
  t.deepEqual(reducer(), { counter: 0 })
);

test('Reducer increases counter of initial state on INCREMENT', t =>
  t.deepEqual(reducer(undefined, { type: 'INCREMENT' }), { counter: 1 })
);

test('Reducer increases counter on INCREMENT', t =>
  t.deepEqual(reducer({ counter: 3 }, { type: 'INCREMENT' }), { counter: 4 })
);

test('createAppStore will return store', t =>
  t.deepEqual(createAppStore().getState(), { counter: 0 })
);

test('createAppStore will return store with preset counter', t =>
  t.deepEqual(createAppStore({ counter: 3 }).getState(), { counter: 3 })
);
