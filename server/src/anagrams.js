import { getLetterCount } from './letter-count';
// import { isEqual } from 'lodash'; // for checking for deep equal

// HINT: use getLetterCount function

export const formatString = (s) => s.toLowerCase().replace(/\s+/g, '');

export const isAnagram = (left, right) => {
  if (left === right) return true;

  const leftCount = getLetterCount(formatString(left));
  const rightCount = getLetterCount(formatString(right));

  // if using lodash
  // return isEqual(leftCount, rightCount);

  const leftValues = Object.entries(leftCount).sort().toString();
  const rightValues = Object.entries(rightCount).sort().toString();
  return leftValues === rightValues;
};

export default { isAnagram, formatString };
