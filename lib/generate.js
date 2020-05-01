import sha512 from 'crypto-js/sha512';
import trigraphs from './enc-trigraphs';

function generate(password, domain, len) {
  const hash = sha512(password + ':' + domain);
  const text = trigraphs(hash, 18);
  const triplets = text.match(/.{6}/g);
  return triplets.join('-');
}

export default generate;
