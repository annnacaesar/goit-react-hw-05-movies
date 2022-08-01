import { List, Item } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
	return <List>
			{movies && movies.map(({id, img, title}) => <Item to={`/movies/${id}`} key={id} data-id={id}>
				<img src={img} alt={title} />
				<h3>{title}</h3>
			</Item>)}
		</List>
};


export default MoviesList;