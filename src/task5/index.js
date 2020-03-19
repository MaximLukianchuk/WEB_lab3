/**
 * Create Counter
 * @returns {function}
 */

export const createCounter = () => {
  let counter = 0

  return () => {
    counter++

    return counter
  }
}

