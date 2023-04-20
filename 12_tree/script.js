const classBlock = 'h-12 w-28 bg-white  flex items-center justify-center border-2 border-gray-500'

// quand j'appuis sur le bouton +, j'ajoute un block (j'ajout une div dans le block-container)
const day = ['lundi', "mardi", 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
const container = document.querySelector('#block-container')
const btn = document.querySelector('#btnAdd')
let i = 0


const list = ['etage1', "etage2", 'etage3', 'etage4', 'etage5', "etage6"]
const etage = {name: "etage", color: "red"}
const pyramide = [
    {name: "Facile", color: "green"},
    {name: "Moyen", color: "purple"},
    {name: "Difficile", color: "red"}
]
pyramide.forEach((obj, index) => {
    console.log(index, obj.name)
    container.innerHTML += `<div class="${classBlock} bg-${obj.color}-600"  >${obj.name}</div>`
})




btn.addEventListener('click', () => {
    container.innerHTML += `<div class="${classBlock}" style="width: ${400/(i+1)}px">${day[i%7]}</div>`
    console.log(i%7)
    i++
})