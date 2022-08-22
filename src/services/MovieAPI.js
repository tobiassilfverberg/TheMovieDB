import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

// Get currently trending movies
const getCurrentMovies = async () => {
	return await axios.get(`movie/now_playing?api_key=${API_KEY}`)
}

// Get one movie with details and actors
const getMovie = async (id) => {
	return await axios.get(`/movie/${id}?api_key=${API_KEY}&append_to_response=credits`)
}

// Get one actor with id
const getActor = async (id) => {
	return await axios.get(`/person/${id}?api_key=${API_KEY}&append_to_response=combined_credits`)
}

const exports = {
	getCurrentMovies,
	getMovie,
	getActor,
}

export default exports