import { describe, it } from 'mocha';
import { expect } from 'chai';
import { isAnagram } from './anagrams';

describe('Verify anagram functionality', () => {
  it('return true if pass in empty string', () => {
    const expected = true;
    const actual = isAnagram('', '');
    expect(actual).equal(expected);
  });
});
