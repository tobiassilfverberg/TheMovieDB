import { useQuery } from 'react-query'
import MovieAPI from '../services/MovieAPI'

const useTopRatedMovies = () => {
	return useQuery('topRatedMovies', MovieAPI.getTopRatedMovies)
}

export default useTopRatedMovies