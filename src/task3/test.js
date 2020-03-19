import { isEquivalent } from './index'

test('isEquivalent', () => {
  const object1 = {
    name: 'Boris',
    weight: 15,
  };

  const object2 = {
    name: 'Boris',
    weight: 15,
  };

  expect(isEquivalent(object1, object2))
    .toBe(true)
})

test('isEquivalent', () => {
  const object1 = {
    name: 'Boris',
    weight: 15,
  };

  const object3 = {
    name: 'Rex',
    weight: 20,
  };

  expect(isEquivalent(object1, object3))
    .toBe(false)
})

test('isEquivalent', () => {
  const a = {
    name: 'Boris',
    weight: 15,
    friends: [
      {
        name: 'Max',
        age: 20,
        weight: 83,
      }
    ],
    age: 7,
  };

  const b = {
    friends: [
      {
        name: 'Max',
        weight: 83,
        age: 20,
      }
    ],
    age: 7,
    name: 'Boris',
    weight: 15,
  };

  expect(isEquivalent(a, b))
    .toBe(true)
})

test('isEquivalent', () => {
  expect(isEquivalent({
    a: {
      b: {
        c: [{a: 1}, {b: 2}, {c: {d: Infinity}}]
      }
    }
  }, {
    a: {
      b: {
        c: [{a: 1}, {b: 2}, {c: {d: Infinity}}]
      }
    }
  }))
    .toBe(true)
})
