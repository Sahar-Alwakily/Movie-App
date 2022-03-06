import {Outlet} from 'react-router-dom'
import MovieListing from "../MovieListing/MovieListing"
import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../featurs/movies/movieSlice';




const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchAsyncMovies());
      dispatch(fetchAsyncShows());

    }, [dispatch]);
    return (
      <div>
        <div className="banner-img"></div>
        <MovieListing />
        <Outlet />
      </div>
    );
  };

export default Home;