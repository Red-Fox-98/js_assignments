const isPalindrome = require('./palindrome');

test('add А роза упала на лапу Азора to equal true', () => {
 expect(isPalindrome('А роза упала на лапу Азора')).toBe(true);
});

test('add Привет to equal false', () => {
 expect(isPalindrome('Привет')).toBe(false);
});