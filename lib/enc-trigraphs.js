function trigraphs(wordArray, len) {
  const doubletAt = (i) => (wordArray.words[i >>> 1] >>> (16 - (i % 2) * 16)) & 0xffff;
  const words = wordArray.words;
  const ndoublets = wordArray.sigBytes >>> 1;

  // Characters in order of frequency in English language since first 12 characters will occur more frequently
  const map1 = 'trnshdlwmfcgpbkvjxqz';
  const map2 = 'eaiouy';
  const mkMap = (shft, mask, mp) => ({ shft, mask, mp });
  const mappings = [mkMap(26, 0x3f, map1), mkMap(22, 0x0f, map2), mkMap(16, 0x3f, map1), mkMap(10, 0x3f, map1), mkMap(6, 0x0f, map2), mkMap(0, 0x3f, map1)];
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
    capPos = (word >>> 8 & 0xff) % (ngroups * 6);
    numPos = (word & 0xff) % (ngroups * 2);
    capGrp = Math.floor(capPos / 6);
    numGrp = Math.floor(0.5 * numPos);
    capPos %= 6;
    numPos = (numPos % 2) * 5;
    numVal = (word >>> 16) % 10;
  }

  const transform = (word, m) => m.mp.charAt(((word >>> m.shft) & m.mask) % m.mp.length);
  for (let g = 0; i < words.length && chars.length < len; i++, g++) {
    const codes = mappings.map(m => transform(words[i], m));
    if (capGrp == g) {
      codes[capPos] = codes[capPos].toUpperCase();
    }

    if (numGrp == g) {
      codes.splice(numPos, 0, numVal.toString());
      codes.splice(6);
    }

    chars.push(...codes);
  }

  return chars.join('');
}

export default trigraphs;
