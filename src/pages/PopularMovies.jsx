import Container from 'react-bootstrap/Container'
import usePopularMovies from "../hooks/usePopularMovies"
import MovieInfoCard from '../components/MovieInfoCard'

const PopularMovies = () => {
	const { data, isError, error, isLoading } = usePopularMovies()

	return (
		<Container className="py-3">
			
			{isError && error.message}

			{isLoading && (
				<h2 className="text-center">Loading...</h2>
			)}

			{data && (
				<MovieInfoCard movies={data} /> 
			)}

		</Container>
	)
}

export default PopularMovies