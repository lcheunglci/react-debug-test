import { describe, it } from 'mocha';
import { expect } from 'chai';
import { isAnagram } from './anagrams';

describe('Verify anagram functionality', () => {
  it('return true if pass in empty string', () => {
    const expected = true;
    const actual = isAnagram('', '');
    expect(actual).equal(expected);
  });

  it('return true if the two strings contains the same characters', () => {
    const expected = true;
    const actual = isAnagram('abc', 'cab');
    expect(actual).equal(expected);
  });

  it('return false if the string does not contain the same characters', () => {
    const expected = false;
    const actual = isAnagram('abc', 'def');
    expect(actual).equal(expected);
  });

  it('return false if the string does not contain the same character count', () => {
    const expected = false;
    const actual = isAnagram('abc', 'abca');
    expect(actual).equal(expected);
  });

  it('return true if the string contain the same characters case insensitively', () => {
    const expected = true;
    const actual = isAnagram('abc', 'ABC');
    expect(actual).equal(expected);
  });

  it('return true if the string contains spaces with the same characters', () => {
    const expected = true;
    const actual = isAnagram('abc', 'a b c');
    expect(actual).equal(expected);
  });
});
