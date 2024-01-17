import React from "react";
import MovieCard from "./Moviecard";

class MovieList extends React.Component{

    render(){
        const {movies, increaseStars, decreaseStars, handleCartBtn, handleFav} = this.props;
        return (
            <>
            {
                movies.map((movie, index) => < MovieCard key={index} movies={movie}
                increaseStars={increaseStars} decreaseStars={decreaseStars}
                handleFav={handleFav} handleCartBtn={handleCartBtn}/>)
            }
            </>
        )
    }
}

export default MovieList;