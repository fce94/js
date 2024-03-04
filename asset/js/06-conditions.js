/*----------------  INSTRUCTION CONDITIONNELLES ----------------*/

// Les operateurs de comparaison (==, ===,!==, >, >=, <, <=)

// Declarer une conctante condition vous lui donnez en valeur un nombre

// Verifier si ce nombre est superieur ou egal a 18 si c'est le cas affichez vous etes majeur

// Si la condition est vraie (truthy), le bloc d'instruction est executé
// Sinon il est ignoré
// const condition = 18

// if(condition >= 18){
//     console.log('vous etes majeur')
// }

// Déclarer une variable qui contient un nombre (demandez à l'utilisateur)
//Si le nombre est divisible par 3 afficher dans un alert 'fizz
//Si le nombre est divisible par 5 afficher dans un alert 'fizz
//Si le nombre est divisible par 3 et 5 afficher dans un alert 'fizz
// Sinon afficher dans un alert le nombre

// const res = prompt('donne moi un nombre')

// if(res%3 == 0){
//     console.log('fizz')
// }else if(res%5 == 0){
//     console.log('fizz')
// }else if(res%3 && res/5 == 0){
//     console.log('fizz')
// }else {
//     console.log('ko')
// }

// Demandez un nombre

// if ce nombre est egale a 12

// verifiez avec == ===

// const num = prompt('donne moi un nombre')

// // === verifie à la fois la valeur et le type des valeurs comparées (operandes)
// if(num === 12){
//     console.log('bravo')
// }else{
//     console.log('faux')
// }

// demandez à l'utilisateur son animal préferé
// si c'est un chien
  // vous etes quelqu'un de bien
// si c'est un poisson rouge
  // je ne veux plus parler avec toi
// sinon
  // je n'ai pas compris la reponse
  
// const animal = prompt('quel est ton animal pref')

// if(animal == 'chien'){
//     console.log("vous eters queqlu'un de bien")
// }else if(animal == "poisson rouge"){
//     console.log('je te parle plus')
// }else{
//     console.log("je n'est pas compris la reponse")
// }



// switch(animal){
//     case 'chien':
//         console.log("vous etes quelqu'un de bien")
//         break
//     case 'chat':
//         console.log("quelle drole d'idée")
//         break
//     case 'poisson rouge':
//         console.log('je ne veux plus parler avec toi')
//         break
//     default:
//         console.log("je n'ai pas compris la reponse")    
// }