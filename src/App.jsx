import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import Navigation from './components/Navigation'
import ActorPage from './pages/ActorPage'
import MovieDetails from './pages/MovieDetailsPage'
import HomePage from './pages/HomePage'
import CurrentMovies from './pages/CurrentMovies'
import PopularMovies from './pages/PopularMovies'
import TopRatedMovies from './pages/TopRatedMovies'
import NotFound from './pages/NotFound'
import './assets/scss/App.scss'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/current" element={<CurrentMovies />} />
				<Route path="/popular" element={<PopularMovies />} />
				<Route path="/toplist" element={<TopRatedMovies />} />
				<Route path="/movie/:id" element={<MovieDetails />} />
				<Route path="/actor/:id" element={<ActorPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>

			<ReactQueryDevtools />
		</div>
	)
}

export default App
