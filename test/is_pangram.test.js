const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });

  test('works with a pangram with only lower case', () => {
    const text = 'the quick brown fox jumps over the lazy dog';

    const result = isPangram(text);

    expect(result).toBe(true);
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    const text = 'abcdefghijklmnopqrstuvwxyz';

    const result = isPangram(text);

    expect(result).toBe(true);
  });

  test("fails if missing character 'x'", () => {
    const textx = 'abcdefghijklmnopqrstuvwyz';

    const resultx = isPangram(textx);

    expect(resultx).toBe(false);
  });

  test('fails if empty sentence', () => {
    const text = '';

    const result = isPangram(text);

    expect(result).toBe(false);
  });

  test('works for pangram with underscores instead of spaces', () => {
    const text = 'the_quick_brown_fox_jumps_over_the_lazy_dog';

    const result = isPangram(text);

    expect(result).toBe(true);
  });

  test('works for pangram with numbers', () => {
    const text = 'the 5 quick brown foxes jump over the 3 lazy dogs';

    const result = isPangram(text);

    expect(result).toBe(true);
  });

  // Write your own test case
});
