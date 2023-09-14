export const log = (...values) => {
    let finalString = values.join(" "); // Unisci gli elementi con uno spazio
    finalString = finalString.trim(); // Rimuovi gli spazi all'inizio e alla fine
    console.log(finalString);
}

log(3, "ciao", 3 + 5)