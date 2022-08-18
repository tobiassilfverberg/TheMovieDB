import Card from 'react-bootstrap/Card'

const MovieDetails = ({ movie }) => {
	return (
		<>
			<h2>{movie.title}</h2>
			<h5>{movie.tagline}</h5>
			<Card key={movie.id} className="mb-3">
				<Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} />
				<Card.Body>
					<Card.Text> 
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
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	)
}

export default MovieDetails