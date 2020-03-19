import User from './index'

test('User', () => {
  User.prototype.getName = function () {
    return this.name
  }

  const me = new User('Rex')

  expect(me.getName())
    .toBe('Rex')
})
