/*
 * AnyHotPass library
 * https://github.com/anyhotcountry/anyhotpass-lib
 * License: GPLv2
 */

import sha512 from 'crypto-js/sha512';
import trigraphs from './enc-trigraphs';

function generate(password, domain, len) {
  const invalid = ['O', 'l'];
  let input = `${password}:${domain}`;
  let output = '';
  const validate = (str) => invalid.map((c) => str.indexOf(c)).every((r) => r === -1);
  for (let i = 0; i < 10 || !validate(output); i += 1) {
    const hash = sha512(input);
    output = trigraphs(hash, len);
    input = output;
  }

  const parts = output.match(/.{6}/g);
  return parts.join('-');
}

export default generate;
