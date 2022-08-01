import { HiOutlineSearchCircle } from 'react-icons/hi';
import { Input, Button, SearchContainer } from './Movies.styled';

const MoviesSearch = () => {
	return (
		<SearchContainer>
			<Input type="text" placeholder="Search..." />
			<Button type="submit">
				<HiOutlineSearchCircle size="35" color="#fff" />
			</Button>
		</SearchContainer>
	);
};

export default MoviesSearch;
