import { isBoolean } from './index';

describe('isBoolean()', () => {
  test('it should return true if the given value is a boolean', () => {
    expect(isBoolean(new Boolean())).toEqual(true);
  });

  test('it should return true if the given value is literally `true`', () => {
    expect(isBoolean(true)).toEqual(true);
  });

  test('it should return true if the given value is literally `false`', () => {
    expect(isBoolean(true)).toEqual(true);
  });

  test('it should return false if the given value is any non-boolean value', () => {
    expect(isBoolean('')).toEqual(false);
    expect(isBoolean(undefined)).toEqual(false);
    expect(isBoolean(null)).toEqual(false);
    expect(isBoolean(123)).toEqual(false);
  });
});
