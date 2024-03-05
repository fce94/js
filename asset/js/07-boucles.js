/*----------------  BOUCLES ----------------*/

// Les boucles sont des structures permettant d'executer plusieurs fois des instructions

/*
La principale difference entre 'for' et while :
'for' est generalement utilisé lorsque le nombre d'itération est connu à l'avance, 'while' est utilisé lorsque le nombre d'iteration est inconnu a l'avance et depend d'une condition specifique
*/

// Boucle : for(){...}
// for(let i = 10; i <= 20 ; i=i+2){
//     console.log(i)
// }

// Boucle : while(){...}
// let i = 10
// while(i <= 20){
//     i = i + 2
//     console.log(i)
// }

// Demandez un nombre à l'utilisateur tant que ce nombre n'est pas le bon dites le nombre est plus grand ou le nombre est plus petit

// let number = prompt('donne moi un nombre')
// const magicNumber = 10

// while(number != magicNumber){
//     if(number < magicNumber){
//        number = prompt('plus grand')
//     }else{
//        number = prompt('plus petit')
    
//     }
// }



// Ecrire un programme qui demande à l'utilisateur de saisir un nombre entier compris entre 1 et 10.
// Si la reponse n'est pas entre 1 et 10, afficher que le message  devait etre compris entre 1 et 10.
// Le programme doit ensuite dessiner un sapin de noel composé d'etoile (*)
//*
//** 
//*** 
//****
//*****
// let stars = prompt('saisie un nombre')

// while(stars <1 || stars > 10){
//     stars = prompt ('resaisie moi un autre nombre8')
    
// }
// let etoile = ''
//     for(let i = 1; i <= stars ;i++){
//         etoile = etoile + '*'
//     console.log(etoile)
// }