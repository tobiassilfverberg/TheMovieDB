import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

// Get currently trending movies
const getCurrentMovies = async () => {
	return await axios.get(`movie/now_playing?api_key=${API_KEY}`)
}

// Get popular movies
const getPopularMovies = async () => {
	return await axios.get(`movie/popular?api_key=${API_KEY}`)
}

// Get top-rated movies
const getTopRatedMovies = async () => {
	return await axios.get(`movie/top_rated?api_key=${API_KEY}`)
}

// Get one movie with details and actors
const getMovie = async (id) => {
	return await axios.get(`/movie/${id}?api_key=${API_KEY}&append_to_response=credits,similar`)
}

// Get one actor with id
const getActor = async (id) => {
	return await axios.get(`/person/${id}?api_key=${API_KEY}&append_to_response=combined_credits`)
}

// Get all genres
const getGenres = async () => {
	return await axios.get(`/genre/movie/list?api_key=${API_KEY}`)
}

// Get one genre
const getGenre = async (genre, page) => {
	return await axios.get(`/discover/movie?api_key=${API_KEY}&with_genres=${genre}&page=${page}`)
}

const exports = {
	getCurrentMovies,
	getPopularMovies,
	getTopRatedMovies, 
	getMovie,
	getActor,
	getGenres,
	getGenre,
}

export default exports