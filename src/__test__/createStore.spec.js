import test from 'ava';
import { reducer } from '../createStore';

test('Reducer returns initial state on first call', t =>
  t.deepEqual(reducer(), { counter: 0 })
);

test('Reducer increases counter of initial state on INCREMENT', t =>
  t.deepEqual(reducer(undefined, { type: 'INCREMENT' }), { counter: 1 })
);

test('Reducer increases counter on INCREMENT', t =>
  t.deepEqual(reducer({ counter: 3 }, { type: 'INCREMENT' }), { counter: 4 })
);
