import CardMovie from "./CardMovie"
import React from 'react'

const ListMovie = ({ movies }) => {
    return (
       <div className='movies-list' style={{marginTop:"100px"}}>
         {movies.map(movies => (
           <CardMovie key={movies.imdbID} movies={movies} />
         ))}
       </div>
    );
   };
   
   export default ListMovie;