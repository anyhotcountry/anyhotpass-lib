/*
 * AnyHotPass library
 * https://github.com/anyhotcountry/anyhotpass-lib
 * License: GPLv2
 */

/* eslint no-bitwise: ["error", { "allow": ["|", "<<"] }] */

import sha512 from 'crypto-js/sha512';
import trigraphs from '../src/lib/enc-trigraphs';

test('Length must be a multiple of 6', () => {
  const t = () => {
    const hash = sha512('Test');
    trigraphs(hash, 15);
  };
  expect(t).toThrow(Error);
});

test('Minimum length must be 12', () => {
  const t = () => {
    const hash = sha512('Test');
    trigraphs(hash, 6);
  };
  expect(t).toThrow(Error);
});

test('generate trigraphs as expected', () => {
  const wordArray = {
    words: [
      (7 << 16) | (15 << 8) | 3,
      (0 << 26) | (0 << 22) | (1 << 16) | (2 << 10) | (1 << 6) | 3,
      (4 << 26) | (2 << 22) | (5 << 16) | (6 << 10) | (3 << 6) | 7,
      (8 << 26) | (4 << 22) | (9 << 16) | (10 << 10) | (5 << 6) | 11,
    ],
  };
  const actual = trigraphs(wordArray, 18);
  expect(actual).toBe('ternashidlo7mufCyg');
});
