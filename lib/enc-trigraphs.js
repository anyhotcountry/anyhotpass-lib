/*
 * AnyHotPass library
 * https://github.com/anyhotcountry/anyhotpass-lib
 * License: GPLv2
 */

/* eslint no-bitwise: ["error", { "allow": ["&", ">>>"] }] */

// Characters in order of frequency in English language since
// first 12 characters will occur more frequently
export const consonants = 'trnshdlwmfcgpbkvjxqz';
export const vowels = 'eaiouy';

function trigraphs({ words }, len) {
  if (len % 6 !== 0 || len < 12) {
    throw Error('len must be a multiple of 6 and have a minimum value of 12');
  }

  const mappings = [
    { shift: 26, mask: 0x3f, map: consonants },
    { shift: 22, mask: 0x0f, map: vowels },
    { shift: 16, mask: 0x3f, map: consonants },
    { shift: 10, mask: 0x3f, map: consonants },
    { shift: 6, mask: 0x0f, map: vowels },
    { shift: 0, mask: 0x3f, map: consonants },
  ];
  const chars = [];
  const ngroups = len / 6;

  // Use first word for position and value of number and caps
  const word0 = words[0];
  const numVal = (word0 >>> 16) % 10;
  let capPos = ((word0 >>> 8) & 0xff) % (ngroups * 6);
  let numPos = (word0 & 0xff) % (ngroups * 2);
  let capGrp = Math.floor(capPos / 6);
  let numGrp = Math.floor(0.5 * numPos);
  capPos %= 6;
  numPos = (numPos % 2) * 5;
  // Cannot start with a number
  if (numGrp === 0 && numPos === 0) {
    numGrp = 1;
  }
  if (capGrp === numGrp) {
    capGrp = (capGrp + 1) % ngroups;
  }

  for (let i = 1, g = 0; i < words.length && chars.length < len; i += 1, g += 1) {
    const charGrp = mappings.map((m) => m.map.charAt(((words[i] >>> m.shift) & m.mask) % m.map.length));
    if (capGrp === g) {
      charGrp[capPos] = charGrp[capPos].toUpperCase();
    }

    if (numGrp === g) {
      charGrp.splice(numPos, 0, numVal.toString());
      charGrp.splice(6);
    }

    chars.push(...charGrp);
  }

  return chars.join('');
}

export default trigraphs;
