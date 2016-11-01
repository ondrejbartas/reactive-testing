import moment from 'moment';

// YYMMDDCCCC -> CCCC is checksum, girls have MM + 50
export default function ageValidation(personalId) {
  const year = parseInt(personalId.substr(0, 2), 10);
  // month % 50 will remove information about girl from ID
  const month = parseInt(personalId.substr(2, 2), 10) % 50;
  const day = parseInt(personalId.substr(4, 2), 10);
  const century = year <= moment().year() - 2000 ? 20 : 19;

  const birth = moment(`${century}${year}-${month}-${day}`);

  return (moment().diff(birth, 'years') < 18) ? 'under 18' : null;
}
