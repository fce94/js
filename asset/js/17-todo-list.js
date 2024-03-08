
const submit = document.querySelector('#buton')
console.log(submit)
const todoList = document.querySelector('#list')

submit.addEventListener('click', function(event){
    const listItem = document.createElement('li')
    const input = document.querySelector('#Todo')
    listItem.textContent = input.value
    todoList.append(listItem)
    
    
})

todoList.addEventListener('dblclick', function(e){
    e.target.remove()
})

