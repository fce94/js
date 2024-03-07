/*---------------- MANIPULATION DU DOM ----------------*/


/*
   Le DOM (Document Object Model) en javascript est une representation
   en memoire d'un document HTML chargé par le navigateur. Le DOM represente
   chaque element du document comme un objet javascript
   qui peu etre manipulé et modifié à travers le code JS


*/

/*

-------------------------------------
Methodes de selecteurs Javascript
------------------------------------

*/
const mainTitle = document.getElementById('main-title');
mainTitle.style.color = 'red'

mainTitle.style.fontFamily = 'Arial'

const paragraphes = document.getElementsByTagName('p')

// Faire une boucle sur l'HTMLCollection paragraphes
for(let i = 0; i < paragraphes.length; i++){
    paragraphes[i].style.color = 'green'
}
/* 
? la methode `getElementsByClassName()`
*/

const title = document.getElementsByClassName('title')
console.log(title)

const paragraphe = document.querySelector('.title')
console.log(paragraphe)

// cssProperties.style.fontSize = '30px'
// console.log(cssProperties)

// Recuperer tout les paragraphes avec la methode querySelectorAll()
// Souligner les paragraphes

// newParagraphes.forEach(function (paragraphe) {
//     paragraphe.style.textDecoration = 'underline'
    
// });

// Selectionner tous les elements qui ont la class txr-uppercase
// tous les mettre en majuscules

const txtUppercases = document.querySelectorAll('.txt-uppercase')

for(let txtUppercase of txtUppercases){

    txtUppercase.style.textTransform = 'uppercase'
}

/*
Quelques proprietés liées aux éléments du DOM
*/

// La propriété 'style' permet de modifier le style
mainTitle.style.textTransform = 'uppercase'

// mainTitle ajouter la class txt-green
mainTitle.classList.add('txt-green', 'test')

// Cibler le p qui a la class txt-uppercase
// Enlever la class txt-uppercase
const paragrapheTest = document.querySelector('#paragraphe-test')
paragrapheTest.classList.remove('txt-uppercase')

// Cibler le deuxieme h2
// Verifier s'il contient la class title
const titleTest = document.querySelector('#verified')
titleTest.classList.contains('title')

//modifier le texte => c'est pas si dur avec de la pratique
verified.innerText = "c'est pas si dur le JS avec innerText"

// La propriete `innerHTML` permet de récuperer ou de definir le contenue HTML d'un element HTML (le HTML est interpreté)
verified.innerHTML = "c'est <em> pas si dur <em> le JS"

// La proprieté `textContent` permet de récuperer ou de definir le contenu textuel d'un element HTML.
verified.textContent = 'c\'est pas si dur le JS '

console.log(verified.textContent)

// Cibler le dernier paragraphe
// Et lui ajouter l'attribut title avec la valeur 'Je suis une pop up ajouté en javascript'
const tester = document.querySelector('#title3')
tester.setAttribute('title3','Je suis une pop-up')

/*
-------------------------------
      Créer des elements
-------------------------------

*/

const newParagraphes = document.createElement('p')
newParagraphes.classList.add('new-paragraphe')
newParagraphes.textContent = 'Je suis un nouvel element crée en Js'
console.log(newParagraphes)

const paragrapheContainer = document.querySelector('#paragraphe-container')

//  append() ajoute un element a la fin 
//  ParagrapheContenair.append(newParagraphe)

// Comment faire pour l'ajouter en haut de la div et en bas ?
paragrapheContainer.prepend(newParagraphes)