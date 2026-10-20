"use strict"; // Mode strict: pour signaler les variables non définé par Let, Const, Var (Slide 52)

// f1  affiche le contenu d'un tableau, chaque élément par ligne, dans la console (Slides 34 et 46)
function f1() {
    // Tableau de chaînes de caractères (Slide 39)
    const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

    // Boucle for pour parcourir le tableau (Slide 45)
    for (let i = 0; i < etudiants.length; i++) {
        console.log(etudiants[i]);
    }
}

// f2  affiche un objet (nom, prenom, âge) dans la console (Slides 34 et 46)
function f2() {
    // Déclaration d'un objet (Slide 40)
    const etudiant = {
        nom: "John",
        prenom: "DOE",
        age: 30
    };

    console.log(etudiant);
}

// f3  affiche un tableau d'objets dans la console (Slides 34 et 46)
function f3() {
    // Déclaration d'un tableau d'objets (Slide 41)
    const etudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];

    // Boucle for pour parcourir le tableau d'objets (Slide 45)
    for (let i = 0; i < etudiants.length; i++) {
        console.log(etudiants[i].nom + "-" + etudiants[i].prenom + "-" + etudiants[i].age);
    }
}