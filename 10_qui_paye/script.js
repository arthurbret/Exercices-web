// ajouter 2 prénoms 


// Lorsqu'un clique sur le bouton "qui paye ?" on affiche le premier prénom de la liste
const perdant = document.querySelector("#perdant")
const btn = document.querySelector('#bouton')
const playersHTML = document.querySelector('#players')
let players = playersHTML.value.split(' ')


playersHTML.addEventListener('keyup', () => {
    players = playersHTML.value.split(',')
    console.log(players)
})


console.log(players)

const randomNumber = (min, max)  => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function quiPaie(players) {
    const nbPlayer = randomNumber(0,(players.length-1))
    perdant.innerHTML= players[nbPlayer]
}

btn.addEventListener('click',() => quiPaie(players))
// On trouve un nombre aléatoire entre 0 et 1


// On affiche un prénom aléatoire de la liste


// Adapter le code pour X prénoms