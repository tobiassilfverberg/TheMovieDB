import Container from 'react-bootstrap/Container'
import { useParams, useSearchParams } from 'react-router-dom'
import useGenre from '../hooks/useGenre'
import useGenres from '../hooks/useGenres'
import MovieInfoCard from '../components/MovieInfoCard'
import Pagination from '../components/Pagination'

const MovieDetailsPage = () => {
	const [searchParams, setSearchParams] = useSearchParams({ page: 1 })
	const page = parseInt(searchParams.get("page") ?? 1)
	const { id } = useParams()
	const { data, error, isError, isLoading } = useGenre(id, page)
	const { data: genres } = useGenres()
	

	let title = genres?.data.genres.find(genre => {
		if (genre.id == id) {
			return genre.name
		}
	})

	return (
		<Container className="py-3 text-center">

			{isError && error.message}

			{isLoading && (
				<h2 className="text-center">Loading...</h2>
			)}	

			{data && (
				<Container>
					{title && (<h2>{title.name}</h2>)}
					<Pagination setSearchParams={setSearchParams} page={page} />
					<MovieInfoCard movies={data} />
				</Container>
			)}
			
		</Container>
	)
}

export default MovieDetailsPage