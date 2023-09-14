/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = (n) => {
    return () => n++
}

let x = createCounter(2)

console.log(x())
console.log(x())
console.log(x())