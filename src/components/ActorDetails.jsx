import { Accordion, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const ActorDetails = ({ actor }) => {
	return (
		<>
			<Card key={actor.id} className="mb-3 text-center">
				<Card.Header> 
					<h2>{actor.name}</h2>
				</Card.Header>
				<Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400${actor.profile_path}`} />
				<Card.Body>
					<Card.Text> 
						<div>
							<span className="fw-bold"> Born: </span>  {actor.birthday}
						</div>
						<div>
							{actor.biography} 
						</div>
					</Card.Text>
					
					<Accordion>
						<Accordion.Item eventKey="0">
							<Accordion.Header>Click to see {actor.name}´s all features ({actor.combined_credits.cast.length}) </Accordion.Header>
							{actor.combined_credits.cast.map(movie => (
								<Accordion.Body key={movie.id}>
									<span className="fw-bold"> 
										{movie.character} 
									</span> in {movie.title} 
									<div>
									<Button 
										size="sm"
										as={Link}
										to={`/movie/${movie.id}`}
										variant="primary">
										Read more
									</Button>
									</div>
								</Accordion.Body>
							))}
						</Accordion.Item>
					</Accordion>
				</Card.Body>
			</Card>
		</>
	)
}

export default ActorDetails