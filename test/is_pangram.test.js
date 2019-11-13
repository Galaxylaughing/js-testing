const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });

  test('works with a pangram with only lower case', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog';

    // Act
    const result = isPangram(text);

    // Assert
    expect(result).toBe(true);
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwxyz';

    // Act
    const result = isPangram(text);

    // Assert
    expect(result).toBe(true);
  });

  test.skip("fails if missing character 'x'", () => {
    // Arrange
    const text = 'the quick brown dog jumps over the lazy dog';

    // Act
    const result = isPangram(text);

    // Assert
    expect(result).toBe(false);
  });

  test.skip('fails if empty sentence', () => {
    // Arrange
    const text = '';

    // Act
    const result = isPangram(text);

    // Assert
    expect(result).toBe(false);
  });

  test.skip('works for pangram with underscores instead of spaces', () => {
    // Arrange
    const text = 'the_quick_brown_fox_jumps_over_the_lazy_dog';

    // Act
    const result = isPangram(text);

    // Assert
    expect(result).toBe(true);
  });

  test.skip('works for pangram with numbers', () => {
    // Arrange
    const text = 'the 5 quick brown foxes jump over the 3 lazy dogs';

    // Act
    const result = isPangram(text);

    // Assert
    expect(result).toBe(true);
  });

  // Write your own test case
});
