let princesses = ["Cendrillon"];

console.table(princesses);

princesses.push("Mulan", "Peach", "Raiponce", "Belle", "Vaiana", "Daisy", "Jasmine");

console.table(princesses);

// Pour supprimer les deux princesses
princesses = princesses.filter(name => name !== "Daisy" && name !== "Belle");

console.table(princesses);

// Pour trier les princesses en alphabétique
princesses.sort();

console.table(princesses);

// Phrase pour afficher le nombre de princesses au total
console.log(`Il y a ${princesses.length} princesses dans le tableau`)


