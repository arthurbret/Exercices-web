const bouton = document.querySelector('#bouton')
const conteneur = document.querySelector('#block-conteneur')
let largeur = 28
let block = `<div class="h-12 w-${largeur} bg-red-900 border border-black border-b-0"></div>`



bouton.addEventListener('click', () => {
    conteneur.innerHTML += block
    largeur += 4
})