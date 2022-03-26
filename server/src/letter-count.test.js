import { getLetterCount } from './letter-count';
import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('getLetterCount - basic functionality', () => {
  it('returns an empty object when passed an empty string', () => {
    const expected = {};
    const actual = getLetterCount('');
    expect(actual).to.deep.equal(expected);
  });
});
