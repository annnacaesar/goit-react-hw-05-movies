import { useState, useEffect } from 'react';
import { fetchMoviesReviews } from '../../services/api-service';
import { ReviewsList, Container, ReviewsItem, Data } from './Reviews.styled';
import { useParams } from 'react-router';

const Reviews = () => {
	const [reviews, setReviews] = useState([]);
	const { movieId } = useParams();

	useEffect(() => {
		const getReviews = async () => {
			try {
				const response = await fetchMoviesReviews(Number(movieId));
				console.log(response);
				setReviews(response);
			} catch (error) {
				console.log(error.message);
			}
		};
		getReviews();
	}, [movieId]);

	return (
		<Container>
			{reviews.length !== 0 ? (
				<ReviewsList>
					{reviews &&
						reviews.map(({ content, author_details, id }) => {
							return (
								<ReviewsItem key={id} data-id={id}>
									<Data>
										Author:{' '}
										{author_details.name
											? author_details.name
											: 'Anonymous'}
									</Data>
									<Data>Rating: {author_details.rating}</Data>

									<Data>{content}</Data>
								</ReviewsItem>
							);
						})}
				</ReviewsList>
			) : (
				<Data>We don't have any reviews for this movie</Data>
			)}
		</Container>
	);
};

export default Reviews;
