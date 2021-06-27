import { UserModel } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new UserModel()).toBeTruthy();
  });
});
