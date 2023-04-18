// #1 - selectionner text et bouton

const randomNumber = (min, max)  => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const names = ["Malo", "Alex", "Adrien", "Alain", "John", "Tom"]

const bouton = document.querySelector('#play')
const text = document.querySelector('.number')
const baudie= document.querySelector('body')
var nbr = 0
console.log(bouton)
console.log(text)
// ecouter le click du bouton
text.innerHTML='00'
 bouton.addEventListener('click', ()=>{

    // mettre 0 à la place "--"
    console.log(baudie.classList)

    const nb = randomNumber(0, 5)
    if (nb == 6) {
      baudie.classList.add("bg-blue-500")
       //baudie.style.backgroundColor= '#000000'

    }
    else {
      baudie.classList.remove("bg-blue-500")
       // baudie.style.backgroundColor = '#ffffff'
    }
    console.log(nb)
    text.innerHTML = names[nb]
 })



// remplacer 0 par un nu

