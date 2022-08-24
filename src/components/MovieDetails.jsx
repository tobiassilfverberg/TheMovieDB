import { Accordion, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const MovieDetails = ({ movie }) => {
	return (
		<>
			<h2>{movie.title}</h2>
			<h5>{movie.tagline}</h5>
			<Card key={movie.id} className="mb-3">
				<Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} />
				<Card.Body> 
						<div>
							<span className="fw-bold"> Released: </span>  {movie.release_date}
						</div>
						<div>
							<span className="fw-bold"> Genres: </span> 
							{movie.genres.map(genre => (genre.name)).join(", ")}
						</div>
						<div>
							<span className="fw-bold"> Runtime: </span>
							{Math.floor(movie.runtime / 60)}h, {movie.runtime % 60}min
						</div>
						<div>
							<span className="fw-bold"> Average score: </span>  {movie.vote_average}
						</div>
						<div>
							{movie.overview} 
						</div>
					
					<Accordion>
						<Accordion.Item eventKey="0">
							<Accordion.Header>Click to see all featuring actors 
								({movie.credits.cast.length})
							</Accordion.Header>
							{movie.credits.cast.map(actor => (
								<Accordion.Body key={actor.id}>
									<span className="fw-bold"> 
										{actor.name} 
									</span> as {actor.character} 
									<div>
									<Button 
										size="sm"
										as={Link}
										to={`/actor/${actor.id}`}
										variant="primary">
										Read more
									</Button>
									</div>
								</Accordion.Body>
							))}
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								Click to see similar movies 
							</Accordion.Header>
							{movie.similar.results.map(similarMovie => (
								<Accordion.Body key={similarMovie.id} 
									className="d-flex justify-content-between">
									<span className="fw-bold"> 
										{similarMovie.title} 
									</span> 
									
									<Button 
										size="sm"
										as={Link}
										to={`/movie/${similarMovie.id}`}
										variant="primary">
										Read more
									</Button>
									
								</Accordion.Body>
							))}
						</Accordion.Item>
					</Accordion>
				</Card.Body>
			</Card>
		</>
	)
}

export default MovieDetails