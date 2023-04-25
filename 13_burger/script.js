import {burgerList} from './data.js'
const container = document.querySelector('#burger-container')
const boutonDroit = document.querySelector('#boutonDroit')
const contenuModal = document.querySelector('#contenu-modal')

// Voici la liste des burgers (le fichier se trouve dans le dossier data.js)
console.log('burgerList', burgerList)

burgerList.forEach(burger => {
    console.log(burger.nom)
})

burgerList.forEach(function(burger, index = 0){
    container.innerHTML += 
`<div class="p-4 md:w-1/3">
    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="${burger.img}" alt="burger image"></img>
      <div class="p-6">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">${burger.prix} €</h2>
        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${burger.nom}</h1>
        <p class="leading-relaxed mb-3">${burger.description}</p>
        <div class="flex items-center flex-wrap">
          <a id="ingredient-button-${index}" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">En savoir plus sur les ingrédients
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>`
  index +=1;
})

boutonDroit.addEventListener('click', () => {
  window.open("https://www.example.com", "_blank", "width=200,height=100")
})

const myBtn = document.querySelector('#myBtn');
const modal = document.querySelector('#myModal');
const span = document.querySelector('.close');
for (let i = 0; i < burgerList.length; i++) {
  const ingButton = document.querySelector(`#ingredient-button-${i}`);
}

myBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
})

span.addEventListener('click', () => {
  modal.classList.add('hidden');
})

ingButton.addEventListener('click', () => {
  alert('tu clique sur le bouton')
})

ingButton.forEach(burger, () =>{
  burger.addEventListener('click', () => {
    alert(`tu clique sur ${burger.nom}`)
    contenuModal.innerHTML = burger.ingredients;
    modal.classList.remove('hidden');
  });
});

alert('coucou')


// Etape 8 (Bonus)
// Afficher la liste des ingrédients