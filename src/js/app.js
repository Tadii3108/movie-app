// Initial Values
const API_KEY = '642a277b';
const url = 'http://www.omdbapi.com/?apikey=642a277b'

// Selecting elements from the DOM
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#input-value');
const movieSearchable = document.querySelector('#movies-searchable');

function movieSection(movies) {
    return movies.map((movie) => {
        return `
            <img src=${movie.Poster} data-movie-id=${movie.imbdID}/>
        `;
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
        <p class="content-close">X</p>
    </div>
    `;

    movieElement.innerHTML = movieTemplate;
    return movieElement
}

buttonElement.onclick = function(e) {
    e.preventDefault();
    const value = inputElement.value;

    // Dynamically gets movie using title input by user
    const newUrl = url + '&s=' + value;

    // Fetching data from endpoint
    fetch(newUrl)
        .then((res) => res.json())
        .then((data) => {
            // data.results []
            const movies = data.results;
            const movieBlock = createMovieContainer(movies);
            movieSearchable.appendChild(movieBlock);
            console.log('Data: ', data);
        })
        .catch((error) => {
            console.log('Error: ', error);
        });
    console.log('Value: ', value);
};