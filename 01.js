const createHelloWorld = () => {
    const greeting = "Hello World";
    return () => greeting;
}

const f = createHelloWorld();

console.log(f()); // "Hello World"
