import React from "react";
import Movie from "./Movie";

const MovieList=(props)=>{
    return(
        <div className="container">
        <div className="row">
         <div className="col s12">{
             props.movies.map((movie,i)=>{
                return(
                    <Movie key={i} img={movie.poster_path} viewMovieInfo={props.viewMovieInfo} movieId={movie.id}/>
                )
             })
         }
    
         </div>
        </div>
       </div>
    )
   
}

export default MovieList;