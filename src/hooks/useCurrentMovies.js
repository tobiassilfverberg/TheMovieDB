import { useQuery } from 'react-query'
import MovieAPI from '../services/MovieAPI'

const useCurrentMovies = () => {
	return useQuery('currentMovies', MovieAPI.getCurrentMovies)
}

export default useCurrentMovies