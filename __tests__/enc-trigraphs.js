import trigraphs from '../lib/enc-trigraphs';

test('generate trigraphs as expected', () => {
  let i = 0;
  let j = 0;
  const wordArray = {
    words: [
      (7 << 16) | (15 << 8) | 3,
      (i++ << 26) | (j++ << 22) | (i++ << 16) | (i++ << 10) | (j++ << 6) | i++,
      (i++ << 26) | (j++ << 22) | (i++ << 16) | (i++ << 10) | (j++ << 6) | i++,
      (i++ << 26) | (j++ << 22) | (i++ << 16) | (i++ << 10) | (j++ << 6) | i++
    ]
  };
  const actual = trigraphs(wordArray, 18);
  expect(actual).toBe('ternashidlo7mufCyg');
});

