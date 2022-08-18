import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import useMovie from '../hooks/useMovie'
import MovieDetails from '../components/MovieDetails'

const MovieDetailsPage = () => {
	const { id } = useParams()
	const { data, error, isError, isLoading } = useMovie(id)

	return (
		<Container className="py-3 text-center">

			{isError && error.message}

			{isLoading && (
				<h2 className="text-center">Loading...</h2>
			)}	

			{data && <MovieDetails movie={data.data} />}
			
		</Container>
	)
}

export default MovieDetailsPage