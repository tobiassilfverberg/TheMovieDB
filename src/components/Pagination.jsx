import Button from 'react-bootstrap/Button'

const Pagination = ({ setSearchParams, page }) => {
	return (
		<div className="d-flex justify-content-between align-items-center mt-4 mb-4">
			<div className="prev">
				<Button
					// disabled={!data.previous}
					variant="primary"
					size="sm"
					onClick={() => {setSearchParams({ page: page - 1})}}
				>
					←
				</Button>
			</div>
			<div className="page">
				{/* {} / {Math.ceil(data.count / 10)} */}
				{page}
			</div>
			<div className="next">
				<Button
					// disabled={!data.next}
					variant="primary"
					size="sm"
					onClick={() => {setSearchParams({ page: page + 1})}}
				>
					→
				</Button>
			</div>
		</div>
	)
}

export default Pagination