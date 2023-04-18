const body = document.querySelector('body')


const date = new Date()
const minutes = date.getMinutes()
const hours = date.getHours()
const seconds = date.getSeconds()

//body.innerHTML = hours + ':' + minutes + ':' + seconds
body.innerHTML = `${hours} : ${minutes} : ${seconds}`

console.log("date : ", date)
console.log("minute : ", date.getMinutes())
