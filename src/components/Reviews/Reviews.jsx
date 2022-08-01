import { useState, useEffect } from 'react';
import { fetchMoviesReviews } from "../../services/api-service";
import {
 	ReviewsList,
	Container,
 ReviewsItem,
 Data 
} from "./Reviews.styled";

const Reviews = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetchMoviesReviews(725201).then(response => setReviews(response))
	}, [])

	return (
		<Container>
			<ReviewsList>
				{reviews && reviews.map(({ content, author_details, id }) => {
					return <ReviewsItem key={id} data-id={id}>
						
							<Data>Author: {author_details.name ? author_details.name : 'Anonymous' }</Data>
						<Data>Rating: {author_details.rating}</Data>
						
						<Data>{ content}</Data>
					</ReviewsItem>
					
				})}
</ReviewsList>
		</Container>
	)
}

export default Reviews;