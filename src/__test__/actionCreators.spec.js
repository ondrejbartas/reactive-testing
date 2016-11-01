import test from 'ava';
import { incrementCounter } from '../actionCreators';

test('incrementCounter will have right type', t => {
  t.is(incrementCounter().type, 'INCREMENT');
});
