// import FilmListItem from "components/FilmListItem";
import { Outlet } from "react-router";
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
// import { useState, useEffect } from "react";
// import { fetchMoviesBySearch } from "../../services/api-service";

const MovieDetails = () => {
	// const [movies, setMovies] = useState([]);

	// useEffect(() => {
	// 	fetchMoviesBySearch().then(response => setMovies(response))
	// }, [])
	

	return (<>
		<CardContainer>
			<ImageContainer>
				<Button type='button'>⇦ Go back</Button>
				<Image src="https://lukachi.com.ua/source/default-image.jpg" alt="name" />
			</ImageContainer>
			<DataContainer>
				<DataTitle>Name</DataTitle>
				<Description>User score: 74%</Description>
				<DataTitle>Overview</DataTitle>
				<Description>England, 15 century</Description>
				<DataTitle>Genres</DataTitle>
				<Description>Drama, History, War</Description>
			</DataContainer>
		</CardContainer>
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