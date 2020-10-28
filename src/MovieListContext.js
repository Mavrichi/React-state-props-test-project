import React,{useState, createContext} from 'react';

export const MovieListContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name:'Harry Potter',
            price:'$10',
            id: 22134
        },
        {
            name:'Pocahontas',
            price:'$15',
            id: 22334
        },
        {
            name:'NWA',
            price:'$6',
            id: 22634
        }

    ]);
    return (
        <MovieListContext.Provider value={[movies, setMovies]}>
            {props.children} 
        </MovieListContext.Provider>
    );
}

