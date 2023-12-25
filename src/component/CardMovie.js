import React from 'react';
import '../Card.css';
import {Link } from "react-router-dom";


const CardMovie = ({ movies }) => {
    return (
        <div className="movie_card" id="bright">
            <div className="info_section">
                <div className="movie_header">
                 <Link to={`/Trailer/${movies.id}`}><img className="locandina" src={movies.Images[0]} alt={movies.Title}/></Link>
                    <h1> {movies.Title}</h1>
                    <h4>{movies.Released}, {movies.Director}</h4>
                    <h4> {movies.imdbRating}</h4>
                    <span className="minutes">{movies.Runtime}</span>
                    <p className="type">{movies.Genre}</p>
                </div>
                <div className="movie_desc">
                    <p className="text">
                    Description <br/> {movies.Plot}
                    </p>
                </div>
            </div>
            <div className="blur_back bright_back"></div>
        </div>
    );
   };
   
   export default CardMovie;

