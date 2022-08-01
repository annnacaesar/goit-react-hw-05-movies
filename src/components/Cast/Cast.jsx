import {
	ListCost,
	Container,
ItemCost,
	Data
} from "./Cast.styled";
import { useState, useEffect } from 'react'
import { getImgPath } from "../../helpers/normalization-obj";
import {  useParams } from "react-router";
import { fetchMoviesCredits } from "../../services/api-service";

const Cast = () => {
	const [credits, setCredits] = useState([]);
	const { movieId } = useParams();
	
	useEffect(() => {
    const getCast = async () => {
      try {
				const response = await fetchMoviesCredits(Number(movieId));
				console.log(response);
        setCredits(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCast();
  }, [movieId]);

	return (
		<Container>{
		credits.length !== 0 ?
			<ListCost>
				{credits && credits.map(({ name, profile_path, character, id }) => {
					const img = getImgPath(profile_path)
					return <ItemCost key={id}>
						<img src={img} alt={name} />
						<Data>{name}</Data>
						<Data>Character: {character} </Data>
					</ItemCost>
				})}
		</ListCost> : <Data>We have no information about the actors of this movie</Data> }
		</Container>
	)
}

export default Cast;