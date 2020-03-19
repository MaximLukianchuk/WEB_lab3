/**
 * isEquivalent
 * @param {object} a
 * @param {object} b
 * @returns {boolean}
 *
 * isEquivalent({a: [{c: 2}, {b: 1}]}, {a: [{b: 1}, {c: 2}]}) -> true
 */

export const isEquivalent = (a, b) => {
  if (a === b) {
    return true
  } else if ((typeof a === 'object' && a !== null) && (typeof b === 'object' && b !== null)) {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false
    }

    for (let el in a) {
      if (b.hasOwnProperty(el)) {
        if (!isEquivalent(a[el], b[el])) {
          return false
        }
      } else {
        return false
      }
    }

    return true
  } else {
    return false
  }
}
