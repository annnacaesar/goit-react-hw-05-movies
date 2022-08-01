import axios from 'axios';
import {
	normalizeMovies,
	normalizeMoviesDetails,
} from '../helpers/normalization-obj';

const API_KEY = '7cb8097836a7a1f4e5c19953961668c8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
	api_key: API_KEY,
	include_adult: false,
	language: 'en-US',
};

export const fetchTrendingMovies = async () => {
	const { data } = await axios.get(`/trending/all/day?`);
	const response = normalizeMovies(data.results);
	return response;
};

export const fetchMoviesById = async id => {
	const { data } = await axios.get(`/movie/${id}?`);
	const response = normalizeMoviesDetails(data);
	return response;
};

export const fetchMoviesBySearch = async query => {
	const { data } = await axios.get(`/search/movie?query=${query}&page=1`);
	const response = normalizeMovies(data.results);
	return response;
};

export const fetchMoviesCredits = async id => {
	const { data } = await axios.get(`/movie/${id}/credits?`);
	return data.cast;
};

export const fetchMoviesReviews = async id => {
	const { data } = await axios.get(`/movie/${id}/reviews?`);
	return data.results;
};

// export default fetchMoviesBySearch;

// adult: false
// backdrop_path: "/vsHD4yu6eHTXfYBLyRRiuQIJmJe.jpg"
// genre_ids: [35]
// id: 838330
// media_type: "movie"
// original_language: "en"
// original_title: "Not Okay"
// overview: "An ambitious young woman, desperate for followers and fame, fakes a trip to Paris to up her social media presence. When a terrifying incident takes place in the real world and becomes part of her imaginary trip, her white lie becomes a moral quandary that offers her all the attention she’s wanted."
// popularity: 111.892
// poster_path: "/x1q3FkqFHBkMeKnHiS6GYgdLvUs.jpg"
// release_date: "2022-07-29"
// title: "Not Okay"
// video: false
// vote_average: 7.1
// vote_count: 50

// genre:
//   id:
//   title:
//   about:
//   popularity:
//   img:
//   releaseDate:
//   vote:
//   votes:
