// import FilmListItem from "components/FilmListItem";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import { CardContainer,
ImageContainer,
Button,
	Image,
	DataContainer,
DataTitle,
	Description,
	InfoContainer,
	InfoLink
} from "./MovieDetails.styled";
import { fetchMoviesById } from "../../services/api-service";

const MovieDetails = () => {
	const { movieId } = useParams();
	const [details, setDetails] = useState(null);

useEffect(() => {
    const getMovie = async () => {
      try {
				const response = await fetchMoviesById(Number(movieId));
				console.log(response);
        setDetails(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovie();
  }, [movieId]);
	
	

	return (<>
		{details && <CardContainer>
			<ImageContainer>
				<Button type='button'>⇦ Go back</Button>
				<Image src={details.img} alt={details.title} />
			</ImageContainer>
			<DataContainer>
				<DataTitle>{details.title} ({details.releaseDate})</DataTitle>
				<Description>User score: {details.vote}</Description>
				<DataTitle>Overview</DataTitle>
				<Description>{details.about}</Description>
				<DataTitle>Genres</DataTitle>
				<Description>{details.genre}</Description>
			</DataContainer>
		</CardContainer>}
		<InfoContainer>
			<DataTitle>Additional information</DataTitle>
			<ul>
				<InfoLink to='cast'>Cast</InfoLink>
				<InfoLink to='reviews'>Reviews</InfoLink>
			</ul>
		</InfoContainer>
		<Outlet/>
		</>
	);
};

export default MovieDetails;
