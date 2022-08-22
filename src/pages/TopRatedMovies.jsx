import Container from 'react-bootstrap/Container'
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import MovieInfoCard from '../components/MovieInfoCard'

const PopularMovies = () => {
	const { data, isError, error, isLoading } = useTopRatedMovies()

	return (
		<Container className="py-3 text-center">
			
			{isError && error.message}

			{isLoading && (
				<h2 className="text-center">Loading...</h2>
			)}

			{data && (
				<>
					<h1>Top rated movies</h1>
					<MovieInfoCard movies={data} /> 
				</>
			)}

		</Container>
	)
}

export default PopularMovies