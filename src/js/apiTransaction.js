// Initial Values
const API_KEY = '642a277b';
const url = 'http://www.omdbapi.com/?apikey=642a277b';

function requestMovies(newUrl, onComplete, onError) {
    fetch(newUrl)
        .then((res) => res.json())
        .then(onComplete)
        .catch(onError);
}

function searchMovie(value) {
    const newUrl = url + '&s=' + value;

    requestMovies(newUrl, renderSearchMovies, handleError);
}
