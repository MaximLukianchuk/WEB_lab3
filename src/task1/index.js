/**
 * Current Date
 * @param {number} year
 * @param {number} month (we consider that January is the first month of the year)
 * @param {number} day
 * @returns {string}
 *
 * currentDate(1990, 3, 26) -> "Mon Mar 26 1990"
 */

export const currentDate = (year, month, day) => new Date(year, month - 1, day).toDateString()
