const ajout = document.querySelector('#compteur-plus')
const retrait = document.querySelector('#compteur-moins')
const compteur = document.querySelector('#compteur')

Number(compteur.innerHTML)

const options = {
    minValue: 0,
    maxValue: 10,
}

ajout.addEventListener('click', () => {
    if (Number(compteur.innerHTML) < options.maxValue) compteur.innerHTML = Number(compteur.innerHTML) + 1
    console.log(compteur.innerHTML)
})

retrait.addEventListener('click', () => {
    if (Number(compteur.innerHTML) > options.minValue) compteur.innerHTML = Number(compteur.innerHTML) - 1
    console.log(compteur.innerHTML)
})

