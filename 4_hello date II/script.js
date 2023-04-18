// On sélectionne le body de la page
const body = document.querySelector('body')


// Cette fonction ajoute un zéro devant un chiffre si celui-ci est inférieur à 10
const addZero = (number) => number < 10 ? '0' + number : number

// Cette fonction récupère l'heure actuelle et l'affiche dans le body
const getTime = () => {
    // On crée une instance de la classe Date
    const date = new Date()
    // On formate les minutes avec addZero
    const minutes = addZero(date.getMinutes())
    // On formate l'heure avec addZero
    const hours = addZero(date.getHours())
    // On formate les secondes avec addZero
    const seconds = addZero(date.getSeconds())

    // On insère l'heure formatée dans le body de la page
    body.innerHTML = `${hours} : ${minutes} : ${seconds}` 
    body.style.backgroundColor = seconds%2 == 0 ? "yellow" : "green"  
}

// On appelle la fonction getTime() une première fois pour l'afficher instantanément
getTime()

// La fonction setInterval permet d'appeler la fonction getTime() toutes les secondes, ainsi l'horloge est mise à jour en temps réel
setInterval(getTime, 1000)