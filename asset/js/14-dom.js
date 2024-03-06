/*---------------- MANIPULATION DU DOM ----------------*/


/*
   Le DOM (Document Object Model) en javascript est une representation
   en memoire d'un document HTML chargé par le navgateur. Le DOM represente
   chaque element du document comme un objet javascriot
   qui peu etre manipulé et mofié à*


*/

/*

-------------------------------------
Methodes de selecteurs Javascript
------------------------------------
*/
const mainTitle = document.getElementById('main-title');
console.log(mainTitle);
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

cssProperties.style.fontSize = '30px'
console.log(cssProperties)

// Recuperer tout les paragraphes avec la methode querySelectorAll()
// Souligner les paragraphes

newParagraphes.forEach(function (paragraphe) {
    paragraphe.style.textDecoration = 'underline'
    
});

// Selectionner tous les elements qui ont la class txr-uppercase
// tous les mettre en majuscules