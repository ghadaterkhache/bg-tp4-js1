"use strict"; // Mode strict: pour signaler les variables non définé par Let, Const,  Var (Slide 52)

// Déclaration de variables - constantes - avec Const (Slide 38)
const nom = "John";
const prenom = "Doe";
const age = 30;
const note = 15;
const pi = 3.14;

// f1 affiche le nom dans la console (Slides 34 et 46)
function f1() {
    console.log(nom);
}

// f2 affiche le prénom dans la console  (Slides 34 et 46)
function f2() {
    console.log(prenom);
}

// f3 affiche nom et prénom séparés par "-" dans la console (Slides 34 et 46)
function f3() {
    console.log(nom + "-" + prenom);
}

// f4 affiche l'âge dans la console (Slides 34 et 46)
function f4() {
    console.log(age);
}

// f5 affiche la note dans la console (Slides 34 et 46)
function f5() {
    console.log(note);
}

// f6 affiche la valeur de Pi dans la console (Slides 34 et 46)
function f6() {
    console.log(pi);
}