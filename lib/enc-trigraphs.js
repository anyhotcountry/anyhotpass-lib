const byteAt = (words, i) => (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;

function trigraphs(wordArray, len) {
  const words = wordArray.words;
  const sigBytes = wordArray.sigBytes;
  const map1 = 'bcdfghjklmnpqrstvwxz';
  const map2 = 'aeiouy';

  // Convert
  const chars = [];
  let i = 0;
  let capPos = 0;
  let numPos = 0;
  while (capPos == numPos && capPos > 0 && numPos > 0) {
    capPos = byteAt(words, i++);
    numPos = byteAt(words, i++);
  }

  for (; i < sigBytes && chars.length < len; i += 2) {
    const byte1 = byteAt(words, i);
    const byte2 = byteAt(words, i + 1);
    const dbyte = byte1 << 8 | byte2;

    const code1 = (dbyte >>> 10) & 0x3f
    const code2 = (dbyte >>> 6) & 0x0f;
    const code3 = dbyte & 0x3f;
    // console.log([dbyte.toString(2), code1.toString(2), code2.toString(2), code3.toString(2)]);
    chars.push(map1.charAt(code1 % map1.length));
    chars.push(map2.charAt(code2 % map2.length));
    chars.push(map1.charAt(code3 % map1.length));
  }

  return chars.join('');
}

export default trigraphs;
