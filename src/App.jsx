import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import CurrentMovies from './pages/CurrentMovies'
import PopularMovies from './pages/PopularMovies'
import Toplist from './pages/Toplist'
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
				<Route path="/toplist" element={<Toplist />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
