import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom'

const GenreList = ({ data }) => {
	return (
		<Dropdown>
			<Dropdown.Toggle id="dropdown-button-dark" variant="secondary">
				View genres
			</Dropdown.Toggle>

			<Dropdown.Menu variant="dark">
				{data.data.genres.map(genre => (
					<Dropdown.Item 
						as={Link} 
						to={`/genre/${genre.id}`}
						key={genre.id}> 
						{genre.name} 
					</Dropdown.Item>
				))}
			</Dropdown.Menu>
		</Dropdown>
	)
}

export default GenreList

// 