import generate from './src/lib/generate';

let password = 'xxxxxx-xxxxxx-xxxxxx';
for (let i = 0; i < 1000; i++) {
    password = generate("123", password, 18);
    console.log(password);
}
