import { useSelector } from 'react-redux';
import {Outlet} from 'react-router-dom';
import { getAllMovies,getAllShows } from '../../featurs/movies/movieSlice';
import MovieCard from "../MovieCard/MovieCard"
import "./MovieListing.scss"

const MovieListing = () => {

    const movies = useSelector(getAllMovies);
    let renderShows ,renderMovie = "";
    const shows = useSelector(getAllShows);


    renderMovie = 
        movies.Response === "True" ? (
        movies.Search.map((movie, index) => (
          <MovieCard key={index} data={movie} />
        ))
      ) : (
        <div className="movies-error">
          <h3>{movies.Error}</h3>
        </div>
      );
        console.log(movies);

        renderShows =
        shows.Response === "True" ? (
          shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
        ) : (
          <div className="shows-error">
            <h3>{shows.Error}</h3>
          </div>
        );

       return (
        
         <div className="movie-wrapper">
              <div className="movie-list">
                 <h2>Movies</h2>
               <div className="movie-container">{renderMovie}</div>
            </div>
            <div className="show-list">
                  <h2>Shows</h2>
            <div className="movie-container">{renderShows}</div>
      </div>
            <Outlet />
        </div>
    );
};

export default MovieListing;