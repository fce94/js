/*---------------- CALLBACK ----------------*/

//  Un callback (fonction de rapel) est une fonction qui est passée en tant qu'argmument dans une autre fonction.

// function add
function add(x, y){
    return x+y
}
// function divide
function divide(x, y){
    return x/y
}
// function multiply
const multiply = function(x, y, callback){
    return callback(x,y);
}
