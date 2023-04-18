// On sélectionne le body de la page
const body = document.querySelector('body')
const helix1 = document.querySelector('#helix1')
const helix2 = document.querySelector('#helix2')
console.log(helix1)

let deg = 0

const animate = () => {
    deg = deg < 360 ? deg + 1 : 0
    console.log("deg", deg)
    helix2.style.transform = `rotate(${deg*10}deg) scale(${deg*0.05})`
    helix1.style.transform = `rotate(${deg*20}deg) scale(${deg*0.04})`
    body.style.background = deg%2 == 0 ? "yellow" : "red"
}

setInterval(animate, 10)