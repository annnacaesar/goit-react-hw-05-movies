import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Loyout = lazy(() => import('components/Loyout'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Loyout />}>
				<Route index element={<Home/>} />
				<Route path="/movies" element={<Movies />} />
				<Route
					path="/movies/:movieId"
					element={<MovieDetails path={'/movies'} />}
				>
					<Route path="cast" element={<Cast />} />
					<Route path="reviews" element={<Reviews />} />
				</Route>
			</Route>
		</Routes>
	);
};
