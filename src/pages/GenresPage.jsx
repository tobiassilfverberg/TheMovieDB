import Container from 'react-bootstrap/Container'
import useGenres from '../hooks/useGenres' 
import GenreList from '../components/GenreList'

const GenresPage = () => {
	const { data, isError, error, isLoading } = useGenres()

	return (
		<Container className="py-3"> 
			{isError && error.message}

			{isLoading && (
				<h2 className="text-center">Loading...</h2>
			)}

			{data && (
				<>
					<h1>Find movies by genre</h1>
					<GenreList data={data} /> 
				</>
			)}
		</Container>
	)
}

export default GenresPage