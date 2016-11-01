import moment from 'moment';
import test from 'ava';
import ageValidation from '../ageValidation';

function getPersonalID(old, girl = false) {
  const base = moment().subtract(old, 'years').format('YYMMDD1234');

  if (!girl) {
    return base;
  }

  const g = parseInt(base.substr(2, 1), 10) + 5;

  return `${base.substr(0, 2)}${g}${base.substr(4, 7)}`;
}

test('ageValidation should return error when age is under 18', t =>
  t.is(ageValidation(getPersonalID(17)), 'under 18')
);

test('ageValidation should return error when age is under 18 and id is girl', t =>
  t.is(ageValidation(getPersonalID(17, true)), 'under 18')
);

test('ageValidation should not return error when age is exactly 18', t =>
  t.is(ageValidation(getPersonalID(18)), null)
);

test('ageValidation should not return error when age is over 18', t =>
  t.is(ageValidation(getPersonalID(21)), null)
);
