const createCounter = (init) => {
    let originalInit = init
    return (
        {
            increment: () => {
                return ++init
            },
            decrement: () => {
                return --init
            },
            reset: () => {
                return init = originalInit
            }
        }
    )
}

let x = createCounter(5)
console.log(x.increment())
console.log(x.increment())
console.log(x.reset())
console.log(x.decrement())
console.log(x.increment())
console.log(x.decrement())
