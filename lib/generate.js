import sha512 from 'crypto-js/sha512';
import trigraphs from './enc-trigraphs';

function generate(password, domain, len) {
  let input = password + ':' + domain;
  let output = '';
  for (let i = 0; i < 10; i++) {
    const hash = sha512(input);
    output = trigraphs(hash, len);
    input = output;
  }

  const parts = output.match(/.{6}/g);
  return parts.join('-');
}

export default generate;
