import React from "react";

const MovieInfo=(props)=>{
  return(
   <div classname="container">
       <div className="row" onClick={props.closeMovieInfo} style={{cursor:"pointer",paddingTop:50}}>
          <i className="fas fa-arrow-left"></i> 
          <span style={{marginLeft:10}}>Go back</span>
       </div>


       <div className="row">
       
       <div className="col s12 m3">
        {   props.currentMovie.poster_path==null? <img src={`https://valmorgan.co.nz/wp-content/uploads/2016/06/default-movie-1-3.jpg`} alt="card image" style={{width:"100%", height:360}} />:<img src={`https://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="card image" style={{width:"100%", height:360}} />}
        </div>

        <div className="col s12 m9">
        <div className="info-container">
            <p>{props.currentMovie.title}</p>
            <p>{props.currentMovie.release_date}</p>
            <p>{props.currentMovie.overview}</p>
        </div>
        </div>

        </div>
        
       
   </div>
  );
};


export default MovieInfo ;
