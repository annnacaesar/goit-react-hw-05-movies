import { List, Item } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
	const location = useLocation();

	return (
		<List>
			{movies &&
				movies.map(({ id, img, title }) => (
					<Item
						to={`/movies/${id}`}
						key={id}
						state={{ from: location }}
					>
						<img src={img} alt={title} />
						<h3>{title}</h3>
					</Item>
				))}
		</List>
	);
};

export default MoviesList;
