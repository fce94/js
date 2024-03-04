/*----------------  CONCATENATION ----------------*/

// Concaténation : afficher du texte et des variables
// declarer des varibales
// age, prenom, nom de famille, adresse, formation, organisme de formation

// recuperer dans une variable le message
// je m'appelle NOM Prenom, j'ai AGE et je suis en formation FORMATION à ORGANISME

const nomPrenom = 'CHARLES EMILE fitia'
const age = 23
const formation = 'AQ developpeur web'
const organisme = 'doranco'

let information ='je m\'appelle'+' '+ nomPrenom +' '+'j\'ai'+' '+age +' ' + 'ans et je suis dans une formation qui s\'intitule'+' '+formation+' '+ 'à' +' '+ organisme

information = "je m'appelle " + [nomPrenom] +" j'ai "+ [age] + " ans et je suis dans une formation qui s'intitule " + [formation] + " à " + [organisme]

// template literals (ou litteraux de gabarits) permet l'interpolation (interpolation de javascript)
information = `je m'appelle ${nomPrenom} j'ai ${age} ans et je suis dans une formation qui s'intitule ${formation} à ${organisme}`

console.log(information);