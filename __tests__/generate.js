import generate from '../lib/generate';

test('generate password as expected', () => {
  const password = generate('Test123', 'google.com', 18);
  expect(password).toBe('qErqeg-2cocny-wijfic');
});

test.each([
  ['Test01', 'google.com', 'gYhkaz-buspi4-sipzyx'],
  ['Test02', 'google.com', 'pOlzin-nitjal-kuvhe5'],
  ['Test03', 'google.com', 'gyVwoz-nuwne1-sufkam'],
  ['Test04', 'google.com', 'qocgIb-tuszon-0mylke'],
  ['Test05', 'google.com', 'hynpa5-susvyk-gilmoB'],
  ['Test06', 'google.com', 'lecwoz-wovkEh-8tidve'],
  ['Test07', 'google.com', 'Cyvjof-dipzi3-dedrad'],
  ['Test08', 'google.com', 'xoqfa6-bivjov-mipluX'],
  ['Test09', 'google.com', 'nevse9-fiwMul-zogjuf'],
  ['Test10', 'google.com', 'xApzuh-muznow-netwu4'],
  ['Test11', 'bing.com', 'xigpaw-sarxi3-zodrEr'],
  ['Test12', 'bing.com', 'magsyk-synty7-cUxtip'],
  ['Test13', 'bing.com', 'gepdun-8pijre-joDmiq'],
  ['Test14', 'bing.com', 'hoglyf-levta0-nuNjor'],
  ['Test15', 'bing.com', 'jipVic-buzsi0-lawmat'],
  ['Test16', 'bing.com', 'xalTil-liwxo5-qazsyh'],
  ['Test17', 'bing.com', 'xeBder-favse5-xiflal'],
  ['Test18', 'bing.com', 'vefxUq-3necgo-kytsib'],
  ['Test19', 'bing.com', 'gilguq-4sogho-kozNad'],
  ['Test20', 'bing.com', 'hymme8-kephyB-juzmaf']
])('generate("%s", "%s")', (master, domain, expected) => {
  const actual = generate(master, domain, 18);
  expect(actual).toBe(expected);
});
