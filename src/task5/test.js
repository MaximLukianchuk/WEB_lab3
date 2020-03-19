import { createCounter } from './index'

test('Create Counter', () => {
  const count = createCounter()

  expect(count())
    .toBe(1)

  expect(count())
    .toBe(2)

  expect(count())
    .toBe(3)

  expect(count())
    .toBe(4)
})

test('Create Counter', () => {
  const count1 = createCounter()
  const count2 = createCounter()

  expect(count1())
    .toBe(1)

  expect(count1())
    .toBe(2)

  expect(count2())
    .toBe(1)

  expect(count1())
    .toBe(3)
})
