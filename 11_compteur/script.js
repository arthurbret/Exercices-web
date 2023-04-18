const ajout = document.querySelector('#compteur-plus')
const retrait = document.querySelector('#compteur-moins')
const compteur = document.querySelector('#compteur')

Number(compteur.innerHTML)

ajout.addEventListener('click', () => {
    compteur.innerHTML = Number(compteur.innerHTML) + 1
    console.log(compteur.innerHTML)
})

retrait.addEventListener('click', () => {
    if (compteur.innerHTML > 0) compteur.innerHTML = Number(compteur.innerHTML) - 1
    console.log(compteur.innerHTML)
})

