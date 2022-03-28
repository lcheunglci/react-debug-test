import { describe, it } from 'mocha';
import { expect } from 'chai';
import { isAnagram, formatString } from './anagrams';

describe('formatString - basic functionality', () => {
  it('removes spaces and converts to lower case', () => {
    // 'This is a STRING' -> 'thisisastring'
    const expected = 'thisisastring';
    const actual = formatString('This is a STRING');
    expect(actual).to.equal(expected);
  });
});

describe('Verify anagram functionality', () => {
  it('return true if pass in empty string', () => {
    const expected = true;
    const actual = isAnagram('', '');
    expect(actual).equal(expected);
  });

  // elbow - below -> true
  // listen - silent -> true
  it('return true when the two known anagram are passed in', () => {
    const expected = true;
    const actual = isAnagram('listen', 'silent');
    expect(actual).equal(expected);
  });

  // elbows - below -> false
  // listens - silent -> false
  it('return false if the string does not contain the same character count', () => {
    const expected = false;
    const actual = isAnagram('listens', 'silent');
    expect(actual).equal(expected);
  });

  it('return false if the string does not contain the same characters', () => {
    const expected = false;
    const actual = isAnagram('below', 'elbows');
    expect(actual).equal(expected);
  });

  // case insensitive
  // STATE - taste -> true
  it('return true if the string contain the same characters case insensitively', () => {
    const expected = true;
    const actual = isAnagram('STATE', 'taste');
    expect(actual).equal(expected);
  });

  // spaces are ignored and (bonus) ignore all non-alphanumeric values
  // conversation - voices rant on -> true
  it('return true if the string contains spaces with the same characters', () => {
    const expected = true;
    const actual = isAnagram('conversation', 'voices rant on');
    expect(actual).equal(expected);
  });
});
