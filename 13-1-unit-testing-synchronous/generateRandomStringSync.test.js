const { generateRandomStringSync } = require('./utils.js');

describe('generateRandomStringSync function', () => {
  test('when given by not number, it should throw an error', () => {
    expect(() => generateRandomStringSync('test')).toThrow('Length must be a number');
  })

  test('when given by number less than 1, it should throw an error', () => {
    expect(() => generateRandomStringSync(0)).toThrow('Length must be at least 1');
  })

  test('when given by number, it should return random string', () => {
    expect(typeof generateRandomStringSync(20)).toBe('string');
    expect(generateRandomStringSync(20).length).toBe(20);
  })
})