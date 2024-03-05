/*---------------- FONCTIONS SUR LES TABLEAUX ----------------*/

// Créer un tableau d'animaux ('chat','chien','tigre','lion','requin,'panda')

const animals = ['chat', 'chein', 'tigre','lion','requin','panda']

// Ajoute un ou plusieurs element a la fin du tableau
// animals.push('dauphin','loup')
console.log(animals)

const reponse = animals.push ('dauphin','loup')
console.log(reponse);

response = animals.pop()
console.log(response)

// Ajouter un ou plusiers element au debut du tableau
//
response = animals.unshift('hiboux')
console.log(response)

// Supprimer le premier élément du tableau
response = animals.shift()
console.log(response)

// Réorganise le tableau de la fin vers le début
animals.reverse()
console.log(animals)

// Modifier ou ajouter ou supprimer un element dans un tablaux
// Ajouter un raton laveur en deuxieme position
animals.splice(1,0, 'raton laveur')
console.log(animals)
// Modifier chien en aigle
animals.splice(6, 1, 'aigle')
console.log(animals)

// Créer une fonction qui prend en parametre un tableau:
      // Retire madrid
      // Ajoute au debut Vienne
      // Rome devient alger
      //Retourne la taille 