import { propertyList } from "./data.js";
const header = document.querySelector('#header');
const logoHeader = document.querySelector('#logo-header');
const container = document.querySelector('#container');



window.addEventListener('scroll', function() {
    if (window.scrollY > 70) {
      header.classList.remove('p-5');
      header.classList.add('p-1');
      logoHeader.width = logoHeader.height = "100";
    } else {
      header.classList.remove('p-1');
      header.classList.add('p-5');
      logoHeader.width = logoHeader.height = "200";
    }
  });

const displayProperty = (propertyList) => {
 propertyList.forEach(property => {
    container.innerHTML += 
`<div class="p-4 md:w-1/3 immeuble cursor-pointer">
    <div class="h-full border-2 border-gray-300 border-opacity-60 rounded-xl overflow-hidden">
      <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="${property.img}" alt="burger image"></img>
      <div class="p-6">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">${property.prix} €</h2>
        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${property.nom}</h1>
        <p class="leading-relaxed mb-3">${property.description}</p>
        <div class="flex items-center flex-wrap">
          <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">En savoir plus
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>`
})}

displayProperty(propertyList)

const immeubles = document.querySelectorAll('.immeuble')

immeubles.forEach((immeubleHTML, index) => {
    immeubleHTML.addEventListener('click', () => {
        console.log(propertyList[index].nom)
    })
})