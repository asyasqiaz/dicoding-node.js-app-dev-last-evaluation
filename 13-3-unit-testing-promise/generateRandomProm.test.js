const { generateRandomStringProm } = require('./utils.js');

describe('generateRandomProm function', () => {
  test('when given by not number, it should be rejected', async () => {
    await expect(generateRandomStringProm('test')).rejects.toThrow('Length must be a number');
  });

  test('when given by number less than 1, it should be rejected', async () => {
    await expect(generateRandomStringProm(0)).rejects.toThrow('Length must be greater than 0');
  });


  test('when given by number, it should be resolved with a random string', async () => {
    const result = await generateRandomStringProm(20);

    expect(typeof result).toBe('string');
    expect(result.length).toBe(20);
  });
})