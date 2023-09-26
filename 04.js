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

