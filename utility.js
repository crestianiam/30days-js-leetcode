const increment = (init) => {
    let currentValue = init
    return (incrementer) => {
        currentValue = currentValue + incrementer
        return currentValue
    }
}


let x = increment(2)
/* 
console.log(x(1))
console.log(x(5))
console.log(x(2)) */

const test = () => {
    let x = 0
    return () => {
        x++
        console.log(x)

    }
}

test()
test()