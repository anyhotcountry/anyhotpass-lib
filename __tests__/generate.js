/*
 * AnyHotPass library
 * https://github.com/anyhotcountry/anyhotpass-lib
 * License: GPLv2
 */

import generate from '../src/lib/generate';

test.each([
  ['Test01', 'google.com', 'tymve1-nipqex-bykTeg'],
  ['Test02', 'google.com', 'vagru5-fasraz-perGub'],
  ['Test03', 'google.com', 'qojxyr-Rajden-0redre'],
  ['Test04', 'google.com', 'defjyM-1pevna-juptum'],
  ['Test05', 'google.com', 'teHnuc-ramta0-fiwjix'],
  ['Test06', 'google.com', 'jeFxop-8riqti-xyjxyc'],
  ['Test07', 'google.com', 'fezgiq-4fapsu-bEskup'],
  ['Test08', 'google.com', 'ketfa7-secfus-majsaP'],
  ['Test09', 'google.com', 'xysme7-Wuwhuz-haqxip'],
  ['Test10', 'google.com', 'gejre2-pesSif-pydhef'],
  ['Test11', 'bing.com', 'gerqag-qezku9-rojRac'],
  ['Test12', 'bing.com', 'tUnryq-gexfut-hedfo5'],
  ['Test13', 'bing.com', 'hobhig-8tarko-dikCyq'],
  ['Test14', 'bing.com', 'nicqow-8vofju-jYtner'],
  ['Test15', 'bing.com', 'vuzjah-2kinxe-kikzIk'],
  ['Test16', 'bing.com', 'fyrris-0xihko-teswAn'],
  ['Test17', 'bing.com', 'viTwec-jyjzi1-bortac'],
  ['Test18', 'bing.com', 'rajzo6-nendyf-sUgnug'],
  ['Test19', 'bing.com', 'mogba2-diDkon-norduk'],
  ['Test20', 'bing.com', 'tyjjer-8dijto-Wyhfah'],
])('generate("%s", "%s")', (master, domain, expected) => {
  const actual = generate(master, domain, 18);
  expect(actual).toBe(expected);
});
