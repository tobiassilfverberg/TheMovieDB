import Container from 'react-bootstrap/Container'
import useCurrentMovies from "../hooks/useCurrentMovies"
import MovieInfoCard from '../components/MovieInfoCard'

const CurrentMovies = () => {
	const { data, isError, error, isLoading } = useCurrentMovies()

	return (
		<Container className="py-3 text-center">
			
			{isError && error.message}

			{isLoading && (
				<h2 className="text-center">Loading...</h2>
			)}

			{data && (
				<>
					<h1>Currently trending movies</h1>
					<MovieInfoCard movies={data} /> 
				</>
			)}

		</Container>
	)
}

export default CurrentMovies