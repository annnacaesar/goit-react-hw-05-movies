import { Title } from './Home.styled';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = ({ movies }) => {
	return (
		<>
			<Title>Trending movies</Title>
			<MoviesList movies={movies} />
		</>
	);
};

export default Home;
