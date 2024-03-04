/*----------------  BOUCLES ----------------*/

// Les boucles sont des structures permettant d'executer plusieurs fois des instructions

// Ecrire un programme qui demande à l'utilisateur de saisir un nombre entier compris entre 1 et 10.
// Si la reponse n'est pas entre 1 et 10, afficher que le message  devait etre compris entre 1 et 10.
// Le programme doit ensuite dessiner un sapin de noel composé d'etoile (*)
//*
//** 
//*** 
//****
//*****
let stars = prompt('saisie un nombre')

while(stars <1 || stars > 10){
    stars = prompt ('resaisie moi un autre nombre8')
    
}
let etoile = ''
    for(let i = 1; i <= stars ;i++){
        etoile = etoile + '*'
    console.log(etoile)
}