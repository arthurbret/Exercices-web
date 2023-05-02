const movieContainer = document.querySelector('#movie-container');
const modal = document.querySelector('#myModal');
const span = document.querySelector('.close');
const modalContainer = document.querySelector('#modal-container');
const url = "https://api.themoviedb.org/3/movie/popular?api_key=2475f1ac83e01913e15755759095f9e5"

const getData = async (url) => {
    const data = await fetch(url)
    const json = data.json()
    return json
}

const displayMovies = (url) => {
    getData(url).then(data => {
        console.log(data) // obj json
        data.results.forEach(movie => {
            movieContainer.innerHTML +=
            `<div class="p-4 md:w-1/3 film cursor-pointer">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://image.tmdb.org/t/p/w500/${movie.backdrop_path}" alt="burger image"></img>
                    <div class="p-6">
                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${movie.title}</h1>
                        <p class="leading-relaxed mb-3">${movie.overview}</p>
                        <div class="flex items-center flex-wrap"></div>
                    </div>
                </div>
            </div>`
        })
        const film = document.querySelectorAll('.film');
    film.forEach((movie, index) => {
        movie.addEventListener('click', () => {
            console.log('click')
            modal.classList.remove('hidden')
            modalContainer.innerHTML = `<img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://image.tmdb.org/t/p/w500/${data.results[index].backdrop_path}" alt="burger image"></img>
            <div class="p-6">
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${data.results[index].title}</h1>
                <p class="leading-relaxed mb-3">${data.results[index].overview}</p>
                <div class="flex items-center flex-wrap"></div>
            </div>`
        });
    })
    })
}

displayMovies(url)

span.addEventListener('click', () => {
    modal.classList.add('hidden');
  })