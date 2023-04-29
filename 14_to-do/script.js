const addButton = document.querySelector('#add')
const listContainer = document.querySelector('#container-list')
const input = document.querySelector('#new')
const filterCheck = document.querySelector('#filter-checkbox')
const filtre = document.querySelector('#filtre')
const dataBaseUrl = "https://json-ece.glitch.me/data.json";

fetch(dataBaseUrl)
    .then(data => data.json())
    .then(data => console.log(data))

const defaultToDo = [
    {done: true, name: 'Learn HTML'},
    {done: true, name: 'Learn CSS'},
]

const displayTodos = (check) => {
    listContainer.innerHTML = ''
    if (check === false) {
        defaultToDo.forEach(element => {
            if (element.done === false){
                listContainer.innerHTML += `<div class="flex border bg-slate-300 p-5 rounded-2xl justify-between gap-10">
            <div class="flex items-center gap-2">
            <input id="checkbox" type="checkbox" ${element.done ? 'checked' : ''}>
            ${element.name}
            </div>
    
            <span id="bin-button" class="material-symbols-outlined cursor-pointer">
                delete
            </span>
            </div>`
            }
        });
    }
    else if (check === true){
        defaultToDo.forEach(element => {
            if (element.done === true){
                listContainer.innerHTML += `<div class="flex border bg-slate-300 p-5 rounded-2xl justify-between gap-10">
            <div class="flex items-center gap-2">
            <input id="checkbox" type="checkbox" ${element.done ? 'checked' : ''}>
            ${element.name}
            </div>
    
            <span id="bin-button" class="material-symbols-outlined cursor-pointer">
                delete
            </span>
            </div>`
            }
        });
    }
    else if (check === 2){
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
}

// #1 Selectionner le bouton avec l'id #add, le container #container-list, le input #new

addButton.addEventListener('click', () => {
    console.log(input.value)
})

// #2 Afficher les todos dans le container avec une fonction displayTodos

displayTodos(2)

// #3 Ajouter un event listener sur le bouton pour ajouter un todo

addButton.addEventListener('click', () => {
    input.value ? defaultToDo.push({done: false, name: input.value}) : ''
    displayTodos(filtre.checked ? filterCheck.checked : 2)
    input.value = ''
})

// #4 (bonus) Faire un filtre

filterCheck.addEventListener('click', () => {
    displayTodos(filtre.checked ? filterCheck.checked : 2)
})

filtre.addEventListener('click', () => {
    displayTodos(filtre.checked ? filterCheck.checked : 2)
})

// #5 (bonus) Supprimer un element

const binButton = document.querySelector('#bin-button')

const filterFunction = (listTodo) => {
    binButton.value ? oui : non
}

binButton.addEventListener('click', () => {
    alert('tu clique sur la poubelle')

})

// #6 (bonus) Cocher les checkbox pour marquer un todo comme fait

const checkbox = document.querySelector('#checkbox')

checkbox.addEventListener('click', () => {
    console.log('tu clique sur la checkbox')
})