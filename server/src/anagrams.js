import { getLetterCount } from './letter-count';

// elbow - below -> true
// elbows - below -> false

// listen - silent -> true
// listens - silent -> false

// spaces are ignored and (bonus) ignore all non-alphanumeric values
// conversation - voices rant on -> true

// case insensitive
// STATE - taste -> true

// HINT: use getLetterCount function

export const isAnagram = (left, right) => {
  if (left === right) return true;

  const leftCount = getLetterCount(left.toLowerCase().replace(/\s+/g, ''));
  const rightCount = getLetterCount(right.toLowerCase().replace(/\s+/g, ''));
  const leftValues = Object.entries(leftCount).sort().toString();
  const rightValues = Object.entries(rightCount).sort().toString();
  return leftValues === rightValues;
};

export default isAnagram;
