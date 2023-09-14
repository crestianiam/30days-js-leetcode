const log = (...values) => {
    let finalString = values.join(" "); // Unisci gli elementi con uno spazio
    finalString = finalString.trim(); // Rimuovi gli spazi all'inizio e alla fine
    console.log(finalString);
}

let x = {
    age: 65,
    name: "bob",

}

let y = {
    age: 65,
    name: "bob",

}
let z = x
let t = x
z.age = 33

console.log(x)

console.log(t === z)


