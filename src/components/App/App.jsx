import { Route, Routes } from "react-router";
import  Loyout from 'components/Loyout';
import  Home from 'components/Home';
import Movies from "components/Movies";
import MovieDetails from "components/MovieDetails";
import Cast from "components/Cast";
import {useState, useEffect} from 'react'
import { fetchTrendingMovies } from "../../services/api-service";
import Reviews from "components/Reviews";
// import { fetchMoviesBySearch } from "services/api-service";


export const App = () => {

const [movies, setMovies] = useState([]);
// const [movieDetails, setMovieDetails] = useState([]);

	useEffect(() => {
		fetchTrendingMovies().then(response => setMovies(response))
	}, [])
	

  // const getPhotos = async (query, page) => {
	// 	if (!query) return;
	// 	// setIsLoading(true);
	// 	try {
	// 		const { hits, totalHits } = await fetchMoviesBySearch(query, page);
	// 		if (hits.length === 0) {
	// 			setIsEmpty(true);
	// 		}
	// 		setImages(prevImages => [...prevImages, ...hits]);
	// 		setLoadMore(page < Math.ceil(totalHits / perPage));
	// 	} catch (error) {
	// 		setError(error.message);
	// 	} finally {
	// 		setIsLoading(false);
	// 	}
	// };




  return (
    <Routes>
      <Route path="/" element={<Loyout />}>
        <Route index element={<Home />}/ >
        <Route path="/movies" element={< Movies />}/>
        <Route path="/movies/:movieId" element={< MovieDetails movies={ movies}/>}>
          <Route path="cast" element={< Cast/>}/>
          <Route path="reviews" element={< Reviews/>}/>
        </Route>
      </Route>
    </Routes>
	);
};
