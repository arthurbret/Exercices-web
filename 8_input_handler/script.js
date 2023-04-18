const input = document.querySelector('#input');
const counter = document.querySelector('#counter');
const counterWords = document.querySelector('#counter-words');
const render = document.querySelector('#render');
const messageDef = document.querySelector('#message-def');
const inputNumber = document.querySelector('#input-number');
const bouton = document.querySelector('#bouton');
let numberMax = 40;
document.getElementById('input-number').value = numberMax;


const changeStateInput = (input, nbCar, numberMax) => {
    if(nbCar >= numberMax) {   
        input.value = input.value.slice(0, numberMax)
        counter.innerHTML = numberMax
        render.innerHTML = input.value
        input.classList.remove('border-slate-500')
        input.classList.add('border-red-500')
    } else {
        input.classList.add('border-slate-500')
        input.classList.remove('border-red-500')
    }
}

const showInfoInput = (event) => {
    const input = event.target
    const car = input.value.split('')
    const nbCar = car.length
    counter.innerHTML = nbCar
    changeStateInput(input, nbCar, numberMax)
}

input.addEventListener('keyup', showInfoInput)

input.addEventListener('keyup', () => {
    const car = input.value.split(/\b\w+\b/g)
    const nbWord= car.length - 1
    counterWords.innerHTML = nbWord
})

inputNumber.addEventListener('keyup', () => {
    numberMax = inputNumber.value
})

bouton.addEventListener('click', () => {
    messageDef.innerHTML = render.innerHTML
})
