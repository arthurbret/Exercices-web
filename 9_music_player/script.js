// const boom = document.querySelector('#boom')
const img = document.querySelector('#trigger-boom')

const boomAudio = new Audio('https://dkihjuum4jcjr.cloudfront.net/ES_ITUNES/Bass%20Drop/ES_Bass%20Drop.mp3')
// console.log(img)

img.addEventListener('click', () => {
    boomAudio.play()
})
