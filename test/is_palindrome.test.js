const isPalindrome = require('../src/is_palindrome');
// const reverseString = require('../src/is_palindrome');

describe('isPalindrome()', () => {
  test('isPalindrome is defined', () => {
    expect(isPalindrome).toBeDefined();
  });

  test('works with a lowercase palindrome', () => {
    const text = "racecar";
    const result = isPalindrome(text);
    expect(result).toBe(true);
  });

  test('works with an upper-case palindrome', () => {
    const text = "racecar".toUpperCase();
    const result = isPalindrome(text);
    expect(result).toBe(true);
  });

  test('is whitespace insensitive', () => {
    const text = "too hot to hoot";
    const result = isPalindrome(text);
    expect(result).toBe(true);
  });

  test('works with an empty string', () => {
    const text = '';
    const result = isPalindrome(text);
    expect(result).toBe(true);
  });

  test('works with a single letter string', () => {
    const text = 'a';
    const result = isPalindrome(text);
    expect(result).toBe(true);
  });
  
  test('works with symmetrical punctuation', () => {
    const text = '!too hot to hoot!';
    const result = isPalindrome(text);
    expect(result).toBe(true);
  });

  test('fails with a nonpalindrome', () => {
    const text = "raceca";
    const result = isPalindrome(text);
    expect(result).toBe(false);
  });

  test('fails with a multi-word nonpalindrome', () => {
    const text = "too hot to bark";
    const result = isPalindrome(text);
    expect(result).toBe(false);
  });

  test('fails with nonsymmetrical punctuation', () => {
    const text = 'too hot to hoot!';
    const result = isPalindrome(text);
    expect(result).toBe(false);
  });
});

// describe('reverseString()', () => {
//   test('reverseString is defined', () => {
//     expect(reverseString).toBeDefined();
//   });

//   test('works with a lowercase palindrome', () => {
//     const text = "racecar";
//     const result = isPalindrome(text);
//     expect(result).toEqual('racecar');
//   });

//   test('is whitespace insensitive', () => {
//     const text = "too hot to hoot";
//     const result = isPalindrome(text);
//     expect(result).toEqual('tooh ot toh oot');
//   });

//   test('works with an empty string', () => {
//     const text = '';
//     const result = isPalindrome(text);
//     expect(result).toEqual('');
//   });

//   test('fails with a single letter string', () => {
//     const text = 'a';
//     const result = isPalindrome(text);
//     expect(result).toEqual('a');
//   });
// });