import Validator from '../js/validator';

const validator = new Validator();

const testName1 = 'name-123_name';
const testName2 = 'name-123_1234name';

test('validate user name', () => {
  const isValid = validator.validateUsername(testName1);
  expect(isValid).toBe(true);
});

test('validate user name', () => {
  const isValid = validator.validateUsername(testName2);
  expect(isValid).toBe(false);
});
