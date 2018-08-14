/* eslint-env jest */
import { getResponse } from '../models/mock';
import toBeType from 'jest-tobetype';
expect.extend(toBeType);

// A simple example test
describe('#getUser() using Promises', () => {
  it('Should load user data', () => {
    return getResponse('/api/users').then(res => {
      expect(res).toBeDefined();
      expect(res.data).toBeType('array');
    });
  });
});
