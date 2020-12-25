import React,{createContext, useState} from 'react';

export const MovieContext = createContext();

function MovieProvider({children}){


    return(
        <MovieContext.Provider value={"Hello"}  >
            {children}
        </MovieContext.Provider>
    );
};

export default MovieProvider;
//const value=useContext(MovieContext)