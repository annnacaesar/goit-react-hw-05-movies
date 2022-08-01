import genreList from "./genreList";
import noImg from "../images/No_image_available.png";

const getGenreArray = genre_ids => genre_ids.map(el => genreList[`${el}`]);
const getGenreArrayLibrary = genres => genres.map(el => el.name);

export const getImgPath = imgPath => !imgPath ? `${noImg}` : `https://image.tmdb.org/t/p/w500/${imgPath}`;

const getDate = date => (!date ? date : date.slice(0, 4));


export const normalizeMovies = (movies) => {
  return movies.map(({  genres = null,
  genre_ids = null,
  id,
    original_title,
  name,
  overview,
  popularity,
  poster_path,
  release_date,
  vote_average,
  vote_count,}) => ( {
genre: genre_ids ? getGenreArray(genre_ids) : getGenreArrayLibrary(genres),
  id: id,
  title: original_title ? original_title : name,
  about: overview,
  popularity: popularity,
  img: getImgPath(poster_path),
  releaseDate: release_date ? getDate(release_date) : "",
  vote: vote_average,
  votes: vote_count,
  }))
}