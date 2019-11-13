const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  // from: https://stackoverflow.com/questions/43275143/unit-tests-isolation-with-jestjs
  // beforeEach(() => {
  //   jest.resetModules();
  // });

  test('isPangram() is defined', () => {
    // const isPangram = require('../src/is_pangram');
    expect(isPangram).toBeDefined();
  });

  test("fails if missing character 'x'", () => {
    const textx = 'abcdefghijklmnopqrstuvwyz';

    const resultx = isPangram(textx);

    console.log(`x1 ${textx}`);
    console.log(`x1 ${resultx}`);

    expect(resultx).toBe(false);
  });

  test.skip('works with a pangram with only lower case', () => {
    // const isPangram = require('../src/is_pangram');
    const text = 'the quick brown fox jumps over the lazy dog';

    const result = isPangram(text);

    expect(result).toBe(true);
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // const isPangram = require('../src/is_pangram');
    const text = 'abcdefghijklmnopqrstuvwxyz';

    const result = isPangram(text);

    // console.log(`a ${text}`);
    // console.log(`a ${result}`);

    expect(result).toBe(true);
  });

  test("fails if missing character 'x'", () => {
    // const isPangram = require('../src/is_pangram');
    const textx = 'abcdefghijklmnopqrstuvwyz';

    const resultx = isPangram(textx);

    console.log(`x2 ${textx}`);
    console.log(`x2 ${resultx}`);

    expect(resultx).toBe(false);
  });

  test.skip('fails if empty sentence', () => {
    // const isPangram = require('../src/is_pangram');
    const text = '';

    const result = isPangram(text);

    expect(result).toBe(false);
  });

  test.skip('works for pangram with underscores instead of spaces', () => {
    // const isPangram = require('../src/is_pangram');
    const text = 'the_quick_brown_fox_jumps_over_the_lazy_dog';

    const result = isPangram(text);

    expect(result).toBe(true);
  });

  test.skip('works for pangram with numbers', () => {
    // const isPangram = require('../src/is_pangram');
    const text = 'the 5 quick brown foxes jump over the 3 lazy dogs';

    const result = isPangram(text);

    expect(result).toBe(true);
  });

  // Write your own test case
});
