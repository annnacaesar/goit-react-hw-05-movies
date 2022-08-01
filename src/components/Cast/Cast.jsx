import {
	ListCost,
	Container,
ItemCost,
	Data
} from "./Cast.styled";
import {useState, useEffect} from 'react'
import { fetchMoviesCredits } from "../../services/api-service";
import { getImgPath } from "../../helpers/normalization-obj";

const Cast = () => {
const [credits, setCredits] = useState([]);

	useEffect(() => {
		fetchMoviesCredits(12593).then(response => setCredits(response))
	}, [])
	

	return (
		<Container>
			<ListCost>
				{credits && credits.map(({ name, profile_path, character, id }) => {
					const img = getImgPath(profile_path)
					return <ItemCost key={id}>
						<img src={img} alt={name} />
						<Data>{name}</Data>
						<Data>Character: {character} </Data>
					</ItemCost>
				})}
				
			{/* <ItemCost>
				<img src="https://lukachi.com.ua/source/default-image.jpg" alt="name" />
				<Data>Name</Data>
				<Data>Character: </Data>
			</ItemCost>
			<ItemCost>
				<img src="https://lukachi.com.ua/source/default-image.jpg" alt="name" />
				<Data>Name</Data>
				<Data>Character: </Data>
			</ItemCost>
			<ItemCost>
				<img src="https://lukachi.com.ua/source/default-image.jpg" alt="name" />
				<Data>Name</Data>
				<Data>Character: </Data>
			</ItemCost>
			<ItemCost>
				<img src="https://lukachi.com.ua/source/default-image.jpg" alt="name" />
				<Data>Name</Data>
				<Data>Character: </Data>
			</ItemCost>
			<ItemCost>
				<img src="https://lukachi.com.ua/source/default-image.jpg" alt="name" />
				<Data>Name</Data>
				<Data>Character: </Data>
			</ItemCost> */}
		</ListCost>
		</Container>
		
	)
}

export default Cast;