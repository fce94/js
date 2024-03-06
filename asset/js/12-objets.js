/*---------------- OBJETS ----------------*/

// Les objets sont des structures de données complexes qui permettent de stocker des valeurs ou des fonctions ensemble
const ar = [13]
console.log(ar[0])
const person ={
    firstName: 'Fitia',
    lastName: 'CHARLES EMILE',
    age: 23,
    formation: ['algorithmique', 'html', 'git', 'javascript'],
    job:{
        name: 'formateur',
        hour: 35,
    },
    getIdentify : function (){
        return `Je m'appelle fitia CHARLES EMILE`
    }
};

// Pour acceder à la propriété d'un objet
console.log(person.formation[1])

// Créer un objet car
//model => 'audi'
// année => 2010
// couleur => red
// option => tableau => siege chauffant, vitre
// moteur => objet => cylindre, nombre de chevaux
// description => function => 'je suis une audi sortie en 2010'

// const car ={
//     model: 'audi',
//     année: '2010',
//     couleur: 'red',
//     option: ['siegechauffant', 'vitre' ],
//     moteur:{
//         cylindre: 6,
//         nombreDeChevaux: 650,
//     },
//     description: function(){
//         return `je suis une ${this.model} sortie en ${this year}`;
//     },
// }