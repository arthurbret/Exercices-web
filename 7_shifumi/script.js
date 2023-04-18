// selectionner le bouton
const btn = document.querySelector('#play')
const j1 = document.querySelector('#j1')
const j2 = document.querySelector('#j2')

const randomNumber = (min, max)  => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(btn)


const elements = ["👋 ","✊","✌️"]

const printShifumi = (element) => {
    // numéro aleatoire entre 1 et 3
    const nb = randomNumber(1,3)
    const selectedElement = elements[nb-1]
  
 

    setTimeout(() => {
        element.classList.remove('rotating');
      },  200);
    element.innerHTML = `<div class="bg-white p-8 rounded-full">${selectedElement}</div>`
}


const play = () => {
    printShifumi(j1, 200)
    printShifumi(j2, 500)
}

btn.addEventListener('click', play)

// Créer une fonction printShifumi() 
 // qui génère un emojie de manière aléatoire 
 // affiche l'emojie dans le body
 // tester la fonction

// Ecouter le click du bouton et lancer la fonction printShifumi

