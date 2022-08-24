import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import useGenre from '../hooks/useGenre'
import MovieInfoCard from '../components/MovieInfoCard'

const MovieDetailsPage = () => {
	const { id } = useParams()
	const { data, error, isError, isLoading } = useGenre(id)

	return (
		<Container className="py-3 text-center">

			{isError && error.message}

			{isLoading && (
				<h2 className="text-center">Loading...</h2>
			)}	

			{data && <MovieInfoCard movies={data} />}
			
		</Container>
	)
}

export default MovieDetailsPage