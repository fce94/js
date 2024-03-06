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
// Supprimer
animals.splice(2, 1)
console.log(animals)

// for(..of..){}permet de parcourir les elements d'un objet itérable (ex: tableau, string)

// Sur le tableau animals faire une for() pour afficher tout les elements du tableau
for(let i = 0; i < animals.length; i++){
      console.log(animals[i])
}

// Sur le tableau animals faire une boucle for(..of..) pour afficher tous les elements du tableau
for(let x of animals){
      console.log(x)
}

// foreach(){} est une methode Javascript qui permet d'itérer sur les elements d'un tableau
animals.forEach(function (animals){
      console.log(animals)
})

// Créer une fonction qui prend en parametre un tableau:
      // Retire madrid
      // Ajoute au debut Vienne
      // Rome devient alger
      //Retourne la taille 
 
const capitalCities = [
      'Paris',
      'Berlin',
      'Rome',
      'Moscou',
      'Londres',
      'Madrid',
]

const modifyArray = () =>{
      capitalCities.pop()
      capitalCities.unshift('Vienne')
      capitalCities.splice(3, 2, 'Alger')

      return Array.length
};

const capitalCitiesLenght = modifyArray(capitalCities);