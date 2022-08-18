import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

// Get whatever is requested
const getCurrentMovies = async () => {
	return await axios.get(`movie/now_playing?api_key=${API_KEY}`)
}

const exports = {
	getCurrentMovies
}

export default exports