// tableau en francais
let mois = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"]

let jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]

// tableau en anglais
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

// Variable en francais
let fr = [mois, jours]

// Variable en anglais
let en = [month, day]


// Variable du tableau principal qui regroupe tout
let mainarray = [fr, en]


console.log(mainarray)

// Pour afficher Novembre, qui se trouve dans 0 0 et position 10 (visible dans la console, même chose pour le 1 1 4 et affichage de month et jours)
console.log(mainarray[0][0][10])
console.log(mainarray[1][1][4])
console.log(month)
console.log(jours)
