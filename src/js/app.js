// Initial Values
const API_KEY = '642a277b';
const url = 'http://www.omdbapi.com/?apikey=642a277b';

// Selecting elements from the DOM
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#input-value');
const movieSearchable = document.querySelector('#movies-searchable');

function movieSection(movies) {
    return movies.map((movie) => {
        if (movie.Poster) {
            return `<img 
            src=${movie.Poster} 
            data-movie-id=${movie.imbdID}/>`;
        }
    })
}

function createMovieContainer(movies) {
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class', 'movie');

    const movieTemplate = `
    <section class="section">
        ${ movieSection(movies) }
    </section>
    <div class="content">
        <p id="content-close">click me</p>
    </div>
    `;

    movieElement.innerHTML = movieTemplate;
    return movieElement
}

function renderSearchMovies(data) {
    // data.Search []
    // allows for new search without appending old
    movieSearchable.innerHTML = ''
    const movies = data.Search;
    const movieBlock = createMovieContainer(movies);
    movieSearchable.appendChild(movieBlock);
    console.log('Data: ', data);
}

buttonElement.onclick = function(e) {
    e.preventDefault();
    const value = inputElement.value;

    // Dynamically gets movie using title input by user
    const newUrl = url + '&s=' + value;

    // Fetching data from endpoint
    fetch(newUrl)
        .then((res) => res.json())
        .then(renderSearchMovies)
        .catch((error) => {
            console.log('Error: ', error);
        });

    inputElement.value = '';   
    console.log('Value: ', value);
};

// Event Delegation
document.onclick = function(event) {

    const target = event.target;

    if (target.tagName.toLowerCase() === 'img') {
        const section = event.target.parentElement; // getting the parent; section
        const content = section.nextElementSibling; // targeting the content
        content.classList.add('content-display');
    }

    if (target.id === 'content-close') {
        const content = target.parentElement;
        content.classList.remove('content-display');
    }
}