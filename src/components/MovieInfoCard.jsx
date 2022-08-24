import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const MovieInfoCard = ({ movies }) => {
	return (
		<Container className="py-3 text-center">	
			{movies.data.results.map((movie) => (
				<Card key={movie.id} className="mb-3">
					<Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} />
					<Card.Body>
						<Card.Title> {movie.original_title} </Card.Title>
							<div>
								<span className="fw-bold"> Released: </span> {movie.release_date}
							</div>
							<div>
								<span className="fw-bold"> Average score: </span> {movie.vote_average}
							</div>
						
						<Button 
							as={Link}
							to={`/movie/${movie.id}`}
							variant="primary">
							Read more
						</Button>
					</Card.Body>
				</Card>
			))}
		</Container>
	)
}

export default MovieInfoCard