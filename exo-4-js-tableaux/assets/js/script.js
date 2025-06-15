let month = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];

for (let i = 0; i < 12; i++) {
    let nb = i + 1
    console.log(nb + " - " + month[i]);
}


// On crée la variable month pour les mois, on crée la boucle for pour faire varier les nombres à mettre à côté des mois. on crée une deuxième variable qui va stocker la valeur de i et on lui ajoute un +1 sinon à l'affichage, ça commencera par 0 - 1 - 2 ect au lieu de 1 - 2 - 3..

// On affiche sur la console.log la variable nb, le tiret et la variable mois avec i