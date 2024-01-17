import React from 'react';
import './App.css';
import MovieList from './MovieList';
import Navbar from './Navbar';
import {movie} from './MoviesData';

class App extends React.Component{

  constructor()
  {
      super();
      this.state = {
          movies: movie,
          cartCount: 0
      }
  }

  increaseStars = (movie) => 
  {
      const {movies} = this.state;
      const movieId = movies.indexOf(movie);
      console.log(movie);

      if(movies[movieId].stars >= 5)
          return;

      movies[movieId].stars += 0.5;
      this.setState({
          movies:movies
      })
  }

  decreaseStars = (movie) => {

      const {movies} = this.state;
      const movieId = movies.indexOf(movie);

      if(movies[movieId].stars <= 0)
          return;
  
      movies[movieId].stars -= 0.5;

      this.setState({
          movies
      })
  }

  handleFav = (movie) => {
      const {movies} = this.state;
      const id = movies.indexOf(movie);

      movies[id].fav = !movies[id].fav;
      this.setState({
          movies
      })
  }

  handleCartBtn = (movie, cnt) => {
      const {movies} = this.state;
      const id = movies.indexOf(movie);

      movies[id].inCart = !movies[id].inCart;

      this.setState({
        movies,
        cartCount: this.state.cartCount + cnt
      })
  }

  render()
  {
    return (
      <>
      <Navbar cartCount={this.state.cartCount}/>
      <MovieList movies={this.state.movies}
                increaseStars={this.increaseStars}
                decreaseStars={this.decreaseStars}
                handleFav={this.handleFav}
                handleCartBtn={this.handleCartBtn}/>
      </>
    );
  }
}

export default App;
