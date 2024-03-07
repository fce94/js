/*---------------- EVENT ----------------*/

/*
En Javascript les événements (events) permettant d'interagir avec les actions de l'utilisateur sur une page web, telles que le click,
le scroll..
*/

// const title = document.querySelector('#main-title')
// title.addEventListener('dblclick', function(){
//     const title = document.querySelector('#title2')
//     title2.style.fontSize = '100px';
//     // console.log('hello,world')
// });
// title.addEventListener('click', function(){

//     title2.style.fontSize = '50px';
// });
// title.addEventListener('mouseenter', function(){
//     title2.style.fontSize = '50px'
// })

// event quand sourirs survol
const paragrapheContainer = document.querySelector('#paragraphe-contenair')

// `addEventListener()`permet de recuperer l'evenement (toutes les information liées au clics)
// .target permet par exemple de recuperer la balise HTML qui a reelement été cliqué
// paragrapheContainer.addEventListener('click', function(e){
//     console.log(e)
//     e.target.style.color = red
// })