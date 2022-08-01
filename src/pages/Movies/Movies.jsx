import { HiOutlineSearchCircle } from 'react-icons/hi';
import { Input, Button, SearchContainer } from './Movies.styled';
import { useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import noImg from '../../images/No_image_available.png';

const initialState = [
	{
		id: 12345,
		img: noImg,
		title: 'sfshn',
	},
	{
		id: 12346,
		img: noImg,
		title: 'sfshn',
	},
	{
		id: 12347,
		img: noImg,
		title: 'sfshn',
	},
	{
		id: 12348,
		img: noImg,
		title: 'sfshn',
	},
	{
		id: 12349,
		img: noImg,
		title: 'sfshn',
	},
	{
		id: 12340,
		img: noImg,
		title: 'sfshn',
	},
	{
		id: 123451,
		img: noImg,
		title: 'sfshn',
	},
	{
		id: 123452,
		img: noImg,
		title: 'sfshn',
	},
];

const MoviesSearch = () => {
	// const [query, setQuery] = useState(null);
	const [movies] = useState(initialState);

	return (
		<>
			<SearchContainer>
				<Input type="text" placeholder="Search..." />
				<Button type="submit">
					<HiOutlineSearchCircle size="35" color="#fff" />
				</Button>
			</SearchContainer>
			{movies.length !== 0 && <MoviesList movies={movies} />}
		</>
	);
};

export default MoviesSearch;
