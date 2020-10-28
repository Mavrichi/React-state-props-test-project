import React from 'react';
import MovieList from './moviesList';
import Nav from './Nav';
import {MovieProvider} from './MovieListContext';
import AddMovie from './AddMovie';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
        <AddMovie />
      </div>
    </MovieProvider>
  );
}

export default App;
