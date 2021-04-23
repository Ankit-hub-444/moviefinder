import React from "react";

const SearchArea=(props)=>{
  return(
     < div className="container">
    < div className="row">
     <div class="col s4 offset-s4">
      <form action="" onSubmit={props.handleSubmit}>
          <div className="input-field">
              <input type="text" placeholder="Search Movies" onChange={props.handleChange}></input>
          </div>
      </form>
     </div>
     </div>
     </div>
  );
};

export default SearchArea;