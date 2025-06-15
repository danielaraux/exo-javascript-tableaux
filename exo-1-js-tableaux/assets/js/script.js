// Variable tab à la valeur Array (tableau) - Première façon d'afficher le tableau.
let tab = Array()
tab[0] = "Janvier"
tab[1] = "Fevrier"
tab[2] = "Mars"
tab[3] = "Avril"
tab[4] = "Mai"
tab[5] = "Juin"
tab[6] = "Juillet"
tab[7] = "Aout"
tab[8] = "Septembre"
tab[9] = "Octobre"
tab[10] = "Novembre"
tab[11] = "Decembre"

console.table(tab)


// Deuxième façon d'afficher le tableau
console.table(["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"])

// On peut aussi créer une variable, stocker les mois dedans et l'afficher avec le console table pour avoir la mise en forme tableau