import { useQuery } from 'react-query'
import MovieAPI from '../services/MovieAPI'

const useGenre = (id, page) => {
	return useQuery(['genre', id, page], () => MovieAPI.getGenre(id, page))
}

export default useGenre