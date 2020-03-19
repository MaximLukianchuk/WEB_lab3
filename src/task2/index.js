/**
 * Sum
 * @param {...number || number[]} args
 * @returns {number}
 *
 * sum(1, 2, 3) -> 6
 * sum([1, 2, 3]) -> 6
 */

export const sum = (...args) => args.length > 1 ? sumHelper(args) : sumHelper(args[0])
const sumHelper = arr => arr ? arr.reduce((a, v) => a + v, 0) : NaN
