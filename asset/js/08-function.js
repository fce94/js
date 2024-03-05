/*----------------  FUNCTIONS ----------------*/

/*
une fontction est bloc de code réutilisable qui peut etre appelé à partir d'autres parties de votre codes
pour effectuer une tâche spécifique.
Les function sont un moyen utile de segmenter votre code en tâches plus petites et plus facile à gérer,
elles permettent de réutiliser le même code plusieurs fois sans avoir à a le copier
*/

// Déclaration d'une function
// function hello(firstname, lastname){
//     const tva = 20 / 100;
//     const result = y*x*z*tva

//     return 'result'
// }
// const resultat = blabla(14, 67, 90);

// console.log (resultat)

// const resultat2 = blabla(7897,99,40)

// console.log(resultat);

//function math(x, y) {
//   return x*y
//}

// Il est possible de sauvegarder une fonction dans une variable
// On les appelle des fonctions anonymes
const math = function (x, y) {
  return x * y;
};

const res = math(12, 89);
console.log(res);

// fonction addition
const add = function (x, y) {
  return x + y;
};

const toto = add(12, 89);
console.log(toto);

// Arrow function (fonction fléché)
const divide = (x, y) => {
  return x / y;
};

const result = divide(23 / 90);
console.log(result);

// Créer une fonction fleché helloYou avec un parametre qui affiche bonjour + prenom

const helloYou = (name) => {
  const message = `bonjour, ${name}`;
  return message;
};

const message = helloYou("fitia");
console.log(message);
// Il existe des facons encore plus concise d'ecrire les fonctions fléchés
// const Arrow = (x) => x * 2;
// const r = arrow(45);
// console.log(r)

// Demander à l'utilisateur de rentrer un nombre
// Creer une fonction fleché qui prend en parametre un nombre
// Et qui affiche dans la console si le nombre est pair ou impair (modulo)
//Appeler la fonction en lui passant le nombre 5 en parametre
// Appeler la fonction en lui passant le nombre 256 en parametre

// Declarer une vatiable qui contient un nombre (demandez à l'utilisateur)
//let reponse = prompt('Donnez moi un nombre !)

// if (response % 3 == 0 && response % 5 == 0){ 
//     console.log('Fizz')
// }else if (response % 5 == 0){
//     console.log('buzz')
// }else if(response % 3 == 0){
//     console.log('fizzbuzz')
// }else{
//     console.log(reponse);
// }

// transformer en fonction le jeu du fizzbuzz
