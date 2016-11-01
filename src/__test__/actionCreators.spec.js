import t from 'ava';
import { incrementCounter } from '../actionCreators';

t('incrementCounter will have right type', () => {
  t.is(incrementCounter().type, 'INCREMENT');
})
