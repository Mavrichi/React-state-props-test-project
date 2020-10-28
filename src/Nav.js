import React,{useContext} from 'react';
import {MovieListContext} from './MovieListContext';
const Nav = () => {
    const [movies, setMovies] = useContext(MovieListContext);
    return(
        <div>
            <h3>Marian</h3>
    <p>List of movies: {movies.length}</p>
        </div>
        // 20:50
    );

};

export default Nav;