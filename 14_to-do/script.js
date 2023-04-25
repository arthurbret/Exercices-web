const addButton = document.querySelector('#add')
const listContainer = document.querySelector('#container-list')
const input = document.querySelector('#new')

const defaultToDo = [
    {done: true, name: 'Learn HTML'},
    {done: true, name: 'Learn CSS'},
]

const displayTodos = (listTodo) => {
    listContainer.innerHTML = ''
    defaultToDo.forEach(element => {
        listContainer.innerHTML += `<div class="flex border bg-slate-300 p-5 rounded-2xl justify-between gap-10">
        <div class="flex items-center gap-2">
        <input id="checkbox" type="checkbox" ${element.done ? 'checked' : ''}>
        ${element.name}
        </div>

        <span id="bin-button" class="material-symbols-outlined cursor-pointer">
            delete
        </span>
        </div>`
    });
}

// #1 Selectionner le bouton avec l'id #add, le container #container-list, le input #new

addButton.addEventListener('click', () => {
    console.log(input.value)
})

// #2 Afficher les todos dans le container avec une fonction displayTodos

displayTodos(defaultToDo)

// #3 Ajouter un event listener sur le bouton pour ajouter un todo

addButton.addEventListener('click', () => {
    input.value ? defaultToDo.push({done: false, name: input.value}) : ''
    displayTodos(defaultToDo)
    input.value = ''
})

checkbox.addEventListener('click', () => {
    console.log('tu clique sur la checkbox')
})

// #4 (bonus) Faire un filtre



// #5 (bonus) Supprimer un element

const binButton = document.querySelector('#bin-button')

binButton.addEventListener('click', () => {
    alert('tu clique sur la poubelle')
})

// #6 (bonus) Cocher les checkbox pour marquer un todo comme fait

const checkbox = document.querySelector('#checkbox')

checkbox.addEventListener('click', () => {
    console.log('tu clique sur la checkbox')
})