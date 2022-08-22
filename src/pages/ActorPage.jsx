import Container from 'react-bootstrap/Container'
import useActor from "../hooks/useActor"
import ActorDetails from '../components/ActorDetails'
import { useParams } from 'react-router'

const ActorPage = () => {
	const { id } = useParams()
	const { data, isError, error, isLoading } = useActor(id)

	return (
		<Container className="py-3">
			
			{isError && error.message}

			{isLoading && (
				<h2 className="text-center">Loading...</h2>
			)}

			{data && (
				<ActorDetails actor={data.data} /> 
			)}

		</Container>
	)
}

export default ActorPage