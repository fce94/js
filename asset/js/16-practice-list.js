
// const list = document.querySelector('#liste')

// list.addEventListener('click', function(event){
//   if(event.target.style.fontSize == ''|| event.target.style.fontSize == '16px'){
//     event.target.style.fontSize ='50px';
//   }else{
//     event.target.style.fontSize = '16px'
//   }
// event.target.style.fontSize permet de recuperer la taille du texte

// Si la taille du texte est égale à 16px
   // On change la taille du texte à 50px
// sinon
  // On change la taille du texte à 16px


// /
// Quand on double click sur la liste 
  // On verra creer un element h2
  // Le texte de ce h2 sera le texte de l'element de la liste sur lequel on double cliqué
  // On ajoute en haut (tout en haut avant le titre principale)


  change.addEventListener('dblclick', function(event){
    // const change = document.querySelector ('#change')
    const title = document.createElement('h2')
    title.textContent = event.target.textContent
    const container = document.querySelector('#container')

    change.prepend(title)
//  event.target.remove()
 
  
})

























































































































































































