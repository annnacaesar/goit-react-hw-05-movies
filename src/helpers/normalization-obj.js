import genreList from './genreList';
import noImg from '../images/No_image_available.png';

const getGenreArray = genre_ids =>
	genre_ids.map(el => genreList[`${el}`]).join(', ');
const getGenreArrayLibrary = genres => genres.map(el => el.name).join(', ');

export const getImgPath = imgPath =>
	!imgPath ? `${noImg}` : `https://image.tmdb.org/t/p/w500/${imgPath}`;

const getDate = date => (!date ? date : date.slice(0, 4));

export const normalizeMovies = movies => {
	return movies.map(
		({
			genres = null,
			genre_ids = null,
			id,
			original_title,
			name,
			overview,
			popularity,
			poster_path,
			release_date,
			vote_average,
			vote_count,
		}) => ({
			genre: genre_ids
				? getGenreArray(genre_ids)
				: getGenreArrayLibrary(genres),
			id: id,
			title: original_title ? original_title : name,
			about: overview,
			popularity: popularity,
			img: getImgPath(poster_path),
			releaseDate: release_date ? getDate(release_date) : '',
			vote: vote_average,
			votes: vote_count,
		})
	);
};

export const normalizeMoviesDetails = ({
	poster_path,
	title,
	original_title,
	vote_average,
	overview,
	genres,
	release_date,
}) => {
	return {
		genre: getGenreArrayLibrary(genres),
		title: original_title ? original_title : title,
		about: overview,
		img: getImgPath(poster_path),
		releaseDate: release_date ? getDate(release_date) : '',
		vote: vote_average,
	};
};

// adult: false
// backdrop_path: "/27Mj3rFYP3xqFy7lnz17vEd8Ms.jpg"
// belongs_to_collection: {id: 1005134, name: 'The Gray Man Collection', poster_path: null, backdrop_path: null}
// budget: 200000000
// genres: (2) [{…}, {…}]
// homepage: "https://www.netflix.com/title/81160697"
// id: 725201
// imdb_id: "tt1649418"
// original_language: "en"
// original_title: "The Gray Man"
// overview: "When a shadowy CIA agent uncovers damning agency secrets, he's hunted across the globe by a sociopathic rogue operative who's put a bounty on his head."
// popularity: 3842.08
// poster_path: "/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg"
// production_companies: (3) [{…}, {…}, {…}]
// production_countries: (2) [{…}, {…}]
// release_date: "2022-07-13"
// revenue: 0
// runtime: 128
// spoken_languages: (5) [{…}, {…}, {…}, {…}, {…}]
// status: "Released"
// tagline: ""
// title: "The Gray Man"
// video: false
// vote_average: 7.011
// vote_count: 1040
