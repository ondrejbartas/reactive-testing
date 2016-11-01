import moment from 'moment';
import test from 'ava';
import ageValidation, { getAge, getBirth } from '../ageValidation';

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
  t.is(getBirth('8658091234'), '1986-8-9');
  t.is(getBirth('1558091234'), '2015-8-9');
  t.is(getBirth('1562091234'), '2015-12-9');
});

test('getBirth for boy', (t) => {
  t.is(getBirth('8608091234'), '1986-8-9');
  t.is(getBirth('1508091234'), '2015-8-9');
  t.is(getBirth('1512091234'), '2015-12-9');
});
