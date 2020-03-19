import { sum } from './index'

test('Sum', () => {
  expect(sum.call(null, [5, 5, 5, 5, 5, 5, 5, 5, 5]))
    .toBe(45)
})

test('Sum', () => {
  expect(sum.call(null, 5, 5, 5, 5, 5, 5, 5, 5, 5))
    .toBe(45)
})

test('Sum', () => {
  expect(sum.apply(null, [5, 5, 5, 5, 5, 5, 5, 5, 5]))
    .toBe(45)
})

test('Sum', () => {
  expect(sum(1, 2, 3))
    .toBe(6)
})

test('Sum', () => {
  expect(sum(-1, -2, 3))
    .toBe(0)
})

test('Sum', () => {
  expect(sum())
    .toBe(NaN)
})
