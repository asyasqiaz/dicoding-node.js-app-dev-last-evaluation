const { generateRandomString } = require('./utils.js');

describe('generateRandomString function', () => {
  test('when given by not number, error argument must be not null', (done) => {
    generateRandomString('test', (error) => {
      expect(error).not.toBeNull();
      done();
    });
  })

  test('when given by number less than 1, error argument must be not null', (done) => {
    generateRandomString(0, (error) => {
      expect(error).not.toBeNull();
      done();
    });
  })

  test('when given by number, error argument sould be null and return random string', (done) => {
    generateRandomString(20, (error, data) => {
      expect(error).toBeNull();
      expect(data.length).toBe(20);
      done();
    });
  })
})