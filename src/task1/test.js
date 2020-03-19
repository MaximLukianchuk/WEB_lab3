import { currentDate } from './index'

test('Current Date', () => {
  const ITMO_BORN_YEAR = 1990;
  const ITMO_BORN_MONTH = 3;
  const ITMO_BORN_DAY = 26;

  expect(currentDate(ITMO_BORN_YEAR, ITMO_BORN_MONTH, ITMO_BORN_DAY))
    .toBe('Mon Mar 26 1990')
})

test('Current Date', () => {
  expect(currentDate(2020, 3, 19))
    .toBe('Thu Mar 19 2020')
})

test('Current Date', () => {
  expect(currentDate(2036, 6, 12))
    .toBe('Thu Jun 12 2036')
})
