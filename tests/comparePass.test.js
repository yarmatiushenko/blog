const bcrypt = require('bcryptjs');
const User = require('../models/user'); // replace with the path to your user model

jest.mock('bcryptjs', () => ({
  compare: jest.fn((candidatePassword, passwordHash, cb) => cb(null, true)), // assuming the passwords match
}));

describe('User Model', () => {
  it('should compare passwords correctly', (done) => {
    const user = new User();
    user.passwordHash = 'hashedpassword';

    const candidatePassword = 'password';
    const cb = (err, isMatch) => {
      try {
        expect(err).toBeNull();
        expect(isMatch).toBe(true);
        done();
      } catch (error) {
        done(error);
      }
    };

    user.comparePassword(candidatePassword, cb);

    expect(bcrypt.compare).toHaveBeenCalledWith(candidatePassword, user.passwordHash, expect.any(Function));
  });
});