//export const GET_MOVIES = "GET_MOVIES"
//export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL"
//export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE"
//export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE" // paso uno sería declarar mis actions

const apiKey= 'bc21fc99';

export function addMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function getMovies(titulo) {
  return function(dispatch) {
    return fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${titulo}`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_MOVIES", payload: json });
      });
  };
}

// exporto las funciones para poder usar en todo mi proyecto

export function getMovieDetail (idMovie) {
  return function(dispatch){
    fetch(`http://www.omdbapi.com/?i=${idMovie}&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      dispatch({ type: "GET_MOVIE_DETAIL", payload: data });
    });
  }
}      
export function removeMovieFavorite (id) {
  return {
    type: "REMOVE_MOVIE_FAVORITE",
    payload: id
  }
}