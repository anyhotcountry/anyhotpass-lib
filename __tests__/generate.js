/*
 * AnyHotPass library
 * https://github.com/anyhotcountry/anyhotpass-lib
 * License: GPLv2
 */

import generate from '../lib/generate';

test.each([
  ['Test01', 'google.com', 'zijnij-zOhnad-xatco0'],
  ['Test02', 'google.com', 'vagru5-fasraz-perGub'],
  ['Test03', 'google.com', 'qojxyr-Rajden-0redre'],
  ['Test04', 'google.com', 'defjyM-1pevna-juptum'],
  ['Test05', 'google.com', 'Tyrhud-ruclum-0rekge'],
  ['Test06', 'google.com', 'moqka6-Bajpit-takhal'],
  ['Test07', 'google.com', 'hiXmoq-dejtol-8pejvi'],
  ['Test08', 'google.com', 'ketfa7-secfus-majsaP'],
  ['Test09', 'google.com', 'xysme7-Wuwhuz-haqxip'],
  ['Test10', 'google.com', 'gejre2-pesSif-pydhef'],
  ['Test11', 'bing.com', 'vynlom-baljy6-fyflYr'],
  ['Test12', 'bing.com', 'tUnryq-gexfut-hedfo5'],
  ['Test13', 'bing.com', 'zutfo3-Golqed-rakhyr'],
  ['Test14', 'bing.com', 'pEwfuk-cyhrel-dytgi9'],
  ['Test15', 'bing.com', 'vuzjah-2kinxe-kikzIk'],
  ['Test16', 'bing.com', 'gecby0-fulfoL-nypdyc'],
  ['Test17', 'bing.com', 'nofli5-Qycran-welxez'],
  ['Test18', 'bing.com', 'rajzo6-nendyf-sUgnug'],
  ['Test19', 'bing.com', 'mogba2-diDkon-norduk'],
  ['Test20', 'bing.com', 'tyjjer-8dijto-Wyhfah'],
])('generate("%s", "%s")', (master, domain, expected) => {
  const actual = generate(master, domain, 18);
  expect(actual).toBe(expected);
});
