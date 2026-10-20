"use strict"; // Mode strict: pour signaler les variables non définé par Let, Const, Var (Slide 52)

// Déclaration d'un tableaux des tableaux (Matricule, Prénom, Nom, note, coefficient) (Slide 39)
const Students = [
                [1000, 'JOHN', 'DOE', 14, 5],
                [2000, 'BOB', 'CARLTON', 7, 1],
                [3000, 'RAYANE', 'SMITH', 13, 3]
                ];

// fonctionA affiche le resultat par rapport au note, dans la console (Slides 38 et 46)
function fonctionA() {
    // Boucle for pour parcourir le tableau des tableaux (Slide 45)
    for (let i = 0; i < Students.length; i++) {
        // Déclaration de variables avec Let (Slide 38)
        let student = Students[i];
        let matricule = student[0];
        let note = student[3];

        // Appel de la fonction B (Slide 46) et Déclaration d'un variable booléan (Slide 38)
        let estAdmis = fonctionB(note);

        // Utilisation de condition if (Slide 43) et Affichage du résultat dans la console (Slide 34)
        if (estAdmis) {
            console.log(matricule + ": ADMIS");
        } else {
            console.log(matricule + ": AJOURNÉ");
        }
    }
}

// fonctionB fonction avec un parametre de type float (note) et retourne un booléan (Slide 46)
function fonctionB(note) {
    return note >= 10;
}