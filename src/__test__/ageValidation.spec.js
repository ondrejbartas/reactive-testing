import moment from 'moment';
import test from 'ava';
import ageValidation, { getAge } from '../ageValidation';

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

test('ageValidation should not return error when age is exactly 18', t =>
  t.is(ageValidation(getPersonalID(18)), null)
);

test('ageValidation should not return error when age is over 18', t =>
  t.is(ageValidation(getPersonalID(21)), null)
);

test('ageValidation should return error when age is under 18 and id is girl', t =>
  t.is(ageValidation(getPersonalID(17, true)), 'under 18')
);

test('ageValidation should not return error when girls age is over 18', t =>
  t.is(ageValidation(getPersonalID(20, true)), null)
);

test('getAge for boy', (t) => {
  t.is(getAge(getPersonalID(5)), 5);
  t.is(getAge(getPersonalID(17)), 17);
  t.is(getAge(getPersonalID(20)), 20);
  t.is(getAge(getPersonalID(65)), 65);
  t.is(getAge(getPersonalID(95)), 95);
});

test('getAge for girl', (t) => {
  t.is(getAge(getPersonalID(5, true)), 5);
  t.is(getAge(getPersonalID(17, true)), 17);
  t.is(getAge(getPersonalID(20, true)), 20);
  t.is(getAge(getPersonalID(65, true)), 65);
  t.is(getAge(getPersonalID(95, true)), 95);
});

test('getBirth for girl', (t) => {
  t.is(getBirth(getPersonalID(5, true)), getPersonalID(5).substr(0, 6));
  t.is(getBirth(getPersonalID(17, true)), getPersonalID(17).substr(0, 6));
  t.is(getBirth(getPersonalID(20, true)), getPersonalID(20).substr(0, 6));
  t.is(getBirth(getPersonalID(65, true)), getPersonalID(65).substr(0, 6));
  t.is(getBirth(getPersonalID(95, true)), getPersonalID(95).substr(0, 6));
});

test('getBirth for boy', (t) => {
  t.is(getBirth(getPersonalID(5)), getPersonalID(5).substr(0, 6));
  t.is(getBirth(getPersonalID(17)), getPersonalID(17).substr(0, 6));
  t.is(getBirth(getPersonalID(20)), getPersonalID(20).substr(0, 6));
  t.is(getBirth(getPersonalID(65)), getPersonalID(65).substr(0, 6));
  t.is(getBirth(getPersonalID(95)), getPersonalID(95).substr(0, 6));
});
