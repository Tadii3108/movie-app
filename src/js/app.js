
// Selecting elements from the DOM
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#input-value');
const movieSearchable = document.querySelector('#movies-searchable');


function movieSection(movies) {
    const section = document.createElement('section');
    section.classList = 'section'
    return movies.map((movie) => {
        if (movie.Poster) {
            const img = document.createElement('img');
            img.src = movie.Poster;
            img['data-movie-id'] = movie.Poster;
            return `<img 
            src=${movie.Poster} 
            =${movie.imbdID}/>`;
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
        <p id="content-close">Close</p>
    </div>
    `;

    movieElement.innerHTML = movieTemplate;
    return movieElement
}

function renderSearchMovies(data) {
    // data.Search []
    // allows for new search without having to append
    movieSearchable.innerHTML = '';
    const movies = data.Search;
    const movieBlock = createMovieContainer(movies);
    movieSearchable.appendChild(movieBlock);
    console.log('Data: ', data);
}


function handleError(error) {
    console.log('Error: ', error)
}

buttonElement.onclick = function(e) {
    e.preventDefault();
    const value = inputElement.value;
    searchMovie(value);

    inputElement.value = '';   
    console.log('Value: ', value);
};

// Event Delegation
document.onclick = function(e) {

    const target = e.target;

    if (target.tagName.toLowerCase() === 'img') {
        const section = e.target.parentElement; // getting the parent; section
        const content = section.nextElementSibling; // targeting the content
        content.classList.add('content-display');
    }

    if (target.id === 'content-close') {
        const content = target.parentElement;
        content.classList.remove('content-display');
    }
}

$("#enter").click(
    function() {
      var movie = $("#input-value").val();
      var list = (movie);
      $('#list').append('<p>' + list + '</p>');
    });

searchMovie('Avengers');