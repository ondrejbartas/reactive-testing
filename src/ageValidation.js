import moment from 'moment';

// YYMMDDCCCC -> CCCC is checksum, girls have MM + 50
export function getBirth(personalId) {
  const year = parseInt(personalId.substr(0, 2), 10);
  // month % 50 will remove information about girl from ID
  const month = parseInt(personalId.substr(2, 2), 10);
  const day = parseInt(personalId.substr(4, 2), 10);
  const century = year <= moment().year() - 2000 ? 20 : 19;
  return `${century}${year}-${month}-${day}`;
}

export function getAge(personalId) {
  return moment().diff(moment(getBirth(personalId)), 'years');
}

export default function ageValidation(personalId) {
  return (getAge(personalId) < 18) ? 'under 18' : null;
}
