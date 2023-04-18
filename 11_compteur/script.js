const ajout = document.querySelector('#compteur-plus')
const retrait = document.querySelector('#compteur-moins')
const compteur = document.querySelector('#compteur')
const options = {
    minValue: 1,
    maxValue: 20,
    changeNote: 10,
}

compteur.innerHTML= options.minValue

if (Number(compteur.innerHTML) > options.changeNote) compteur.classList.add('text-green-500')
if (Number(compteur.innerHTML) <= options.changeNote) compteur.classList.add('text-red-500')

ajout.addEventListener('click', () => {
    if (Number(compteur.innerHTML) < options.maxValue) compteur.innerHTML = Number(compteur.innerHTML) + 1
    if (Number(compteur.innerHTML) > options.changeNote){
        compteur.classList.remove('text-red-500')
        compteur.classList.add('text-green-500')
    }
})

retrait.addEventListener('click', () => {
    if (Number(compteur.innerHTML) > options.minValue) compteur.innerHTML = Number(compteur.innerHTML) - 1
    if (Number(compteur.innerHTML) <= options.changeNote){
        compteur.classList.remove('text-green-500')
        compteur.classList.add('text-red-500')
    }
    console.log(compteur.innerHTML)
})

