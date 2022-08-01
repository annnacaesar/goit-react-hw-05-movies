import { Title} from './Home.styled';
import {useState, useEffect} from 'react'
import { fetchTrendingMovies } from "../../services/api-service";
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    const  fetchCountries = async()=> {
      try {
        const movies = await fetchTrendingMovies();
        setMovies(movies);
    }catch (error) {
        console.log(error.message);
      }
    }  
    fetchCountries();
  },[])

	return (<>
		<Title>Trending movies</Title>
		<MoviesList movies={ movies}/>
		</>
	);
};

export default Home;
