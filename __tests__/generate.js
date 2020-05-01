import generate from '../lib/generate';

test('generate password as expected', () => {
    let password = generate('Test123', 'google.com');
  expect(password).toBe('pohkoc-mulcin-modcuz');
});