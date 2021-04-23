import React from "react";

const Movie=(props)=>{
  return(
      <div className="col  s12 m6 l3">
      <div className="card">
      <div class="card-image waves-effect waves-block waves-light">
        {
           props.img==null? <img src={`https://valmorgan.co.nz/wp-content/uploads/2016/06/default-movie-1-3.jpg`} alt="card image" style={{width:"100%", height:360}} />:<img src={`https://image.tmdb.org/t/p/w185${props.img}`} alt="card image" style={{width:"100%", height:360}} />
        }
      </div>
      <div className="card-content">
      <p><a href="#" onClick={()=>props.viewMovieInfo(props.movieId)}>View Details</a></p>
      </div>
      </div>
      </div>
  );
}

export default Movie;