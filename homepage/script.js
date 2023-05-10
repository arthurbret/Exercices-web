const header = document.querySelector('#header');
const logoHeader = document.querySelector('#logo-header');
const container = document.querySelector('#immo-container');
const modal = document.querySelector('#boite-modale');
const modalContainer = document.querySelector('#modal-container');
const containerImmo = document.querySelector('#container-immeuble');
const span = document.querySelector('.close');
let headerActiv = 0;
let indexClick = 0;
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore, collection, addDoc, updateDoc, deleteDoc, setDoc, getDoc, where, writeBatch, query, orderBy, doc, limit, getDocs } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA7go3kpJtwMffC_AczCvsASQWHPnf1gXc",
    authDomain: "divid-a68c4.firebaseapp.com",
    projectId: "divid-a68c4",
    storageBucket: "divid-a68c4.appspot.com",
    messagingSenderId: "80011257850",
    appId: "1:80011257850:web:ea052514f8290cdff5e643"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// fonction pour récupèrer une collection (READ)
const getDocument = async (collectionName) => {
  const DocumentColRef = collection(db, collectionName);
  const DocumentSnapshot = await getDocs(DocumentColRef);
  const DocumentList = DocumentSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
  return DocumentList
}

// Fonction qui gère la taille du header en fonction d'une variable
const headerToggle = (nbToggle) => {
  if (((window.scrollY > 70) && (headerActiv == 0))) {
    header.classList.remove('p-5');
    header.classList.add('p-1');
    logoHeader.width = logoHeader.height = "100";
  } else {
    header.classList.remove('p-1');
    header.classList.add('p-5');
    logoHeader.width = logoHeader.height = "200";
  }
}

// Fonction qui envoie la variable en fonction du scroll de la page
window.addEventListener('scroll', function() {
  headerToggle();
});

// Fonction qui affiche les différents immeubles
const displayProperty = (propertyList) => {
 propertyList.forEach(property => {
    container.innerHTML += 
`<div class="p-4 md:w-1/3">
    <div class="h-full border-2 border-gray-300 border-opacity-60 rounded-xl overflow-hidden">
      <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="${property.img}" alt="Photo du projet"></img>
      <div class="p-6">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">${property.prix} €</h2>
        <h1 class="title-font text-3xl font-medium text-gray-900 mb-3" style="font-family: 'Foldit', cursive;">${property.nom}</h1>
        <p class="leading-relaxed mb-3">${property.description}</p>
        <div class="flex items-center flex-wrap gap-2 w-full">
          <div id="apercu" class="flex items-center justify-center flex-wrap text-indigo-500 gap-1 cursor-pointer border-4 border-gray-200 bg-white rounded-full h-14 w-14 hover:bg-gray-200 transition">
            <span class="material-symbols-outlined">visibility</span>
          </div>
          <div id="plus" class="flex items-center justify-center flex-wrap text-indigo-500 gap-1 cursor-pointer border-4 border-gray-200 bg-white rounded-full h-14 w-48 hover:bg-gray-200 transition">
            <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 font-bold">En savoir plus
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>`
})}

// Fonction qui affiche les infos de l'immeuble dans la modale
const getDataFirebase = async() => {
  const biens = await getDocument("biens")
  console.log("biens", biens)
  displayProperty(biens)
  const immeubles = document.querySelectorAll('#apercu')
  const plus = document.querySelectorAll('#plus')
  immeubles.forEach((immeubleHTML, index) => {
    immeubleHTML.addEventListener('click', () => {
      headerActiv = 1;
      headerToggle(1);
      modal.classList.remove('hidden')
      modalContainer.innerHTML =
      `<div class="p-8">
          <h1 class="title-font text-3xl font-medium text-gray-900 mb-3" style="font-family: 'Foldit', cursive;">${biens[index].nom}</h1>
          <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg mb-3" src="${biens[index].img}" alt="immo img"></img>
          <p class="leading-relaxed mb-3">${biens[index].description}</p>
          <iframe class="rounded-lg w-full" src="${biens[index].map ? biens[index].map : ''}" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div class="flex items-center flex-wrap"></div>
      </div>`
      document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
          modal.classList.add('hidden');
          headerActiv = 0;
          headerToggle()
        }
      })
      span.addEventListener('click', () => {
        modal.classList.add('hidden');
        headerActiv = 0;
        headerToggle()
      })
    })
  })
  plus.forEach((plusHTML, index) => {
    plusHTML.addEventListener('click', () => {
      indexClick = index;
      localStorage.setItem("selectedImmo", JSON.stringify(biens[index]));
      const newWindow = window.location.assign(`./pageImmo.html?id=${biens[index].id}`, '_blank');
  
  // Attendre que la page soit chargée
  newWindow.addEventListener('load', () => {

    // Récupérer l'élément containerImmo de la nouvelle page chargée
    const newContainerImmo = newWindow.document.getElementById('container-immeuble');
    // Mettre à jour le contenu de l'élément containerImmo de la nouvelle page
    newContainerImmo.innerHTML = `
      <div class="p-8">
        <h1 class="title-font text-3xl font-medium text-gray-900 mb-3" style="font-family: 'Foldit', cursive;">${biens[indexClick].nom}</h1>
        <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg mb-3" src="${biens[indexClick].img}" alt="immo img"></img>
        <p class="leading-relaxed mb-3">${biens[indexClick].description}</p>
        <iframe class="rounded-lg w-full" src="${biens[indexClick].map ? biens[indexClick].map : ''}" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="flex items-center flex-wrap">coucou</div>
      </div>
    `;
  });
    })
  })
}

getDataFirebase()