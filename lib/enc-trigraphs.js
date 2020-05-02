export const consonants = 'trnshdlwmfcgpbkvjxqz';
export const vowels = 'eaiouy';

function trigraphs(wordArray, len) {
  const doubletAt = (i) => (wordArray.words[i >>> 1] >>> (16 - (i % 2) * 16)) & 0xffff;
  const words = wordArray.words;

  if (len % 6 != 0 || len < 12) {
    throw Error("len must be a factor of 6 and have a minimum value of 12");
  }

  // Characters in order of frequency in English language since first 12 characters will occur more frequently
  const mkMap = (shft, mask, mp) => ({ shft, mask, mp });
  const mappings = [mkMap(26, 0x3f, consonants), mkMap(22, 0x0f, vowels), mkMap(16, 0x3f, consonants), mkMap(10, 0x3f, consonants), mkMap(6, 0x0f, vowels), mkMap(0, 0x3f, consonants)];
  const chars = [];
  const ngroups = len / 6;
  let i = 0;
  let capPos = 0;
  let numPos = 0;
  let capGrp = 0;
  let numGrp = 0;
  let numVal = 0;

  while (capGrp == numGrp || (numGrp == 0 && numPos == 0)) {
    const word = words[i++];
    numVal = (word >>> 16) % 10;
    capPos = (word >>> 8 & 0xff) % (ngroups * 6);
    numPos = (word & 0xff) % (ngroups * 2);
    capGrp = Math.floor(capPos / 6);
    numGrp = Math.floor(0.5 * numPos);
    capPos %= 6;
    numPos = (numPos % 2) * 5;
  }

  const transform = (word, m) => m.mp.charAt(((word >>> m.shft) & m.mask) % m.mp.length);
  for (let g = 0; i < words.length && chars.length < len; i++, g++) {
    const charGrp = mappings.map(m => transform(words[i], m));
    if (capGrp == g) {
      charGrp[capPos] = charGrp[capPos].toUpperCase();
    }

    if (numGrp == g) {
      charGrp.splice(numPos, 0, numVal.toString());
      charGrp.splice(6);
    }

    chars.push(...charGrp);
  }

  return chars.join('');
}

export default trigraphs;
