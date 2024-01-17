import React from 'react';

class MovieCard extends React.Component{

    render()
    {
        const {title, plot, price, rating, stars, fav, inCart, poster} = this.props.movies;
        const {increaseStars, decreaseStars, handleCartBtn, handleFav} = this.props;
        return(
            <div className='main'>
                <div className='movie-card'>
                    <div className='left'>
                        <img alt='Poster' src={poster} />
                    </div>
                    <div className='right'>
                        <div className='title'>{title}</div>
                        <div className='plot'>{plot}</div>
                        <div className='price'>Rs. {price}</div>

                        <div className='footer'>
                            <div className='rating'>{rating}</div>
                            <div className='star-dis'>
                                <img className='str-btn' alt='decrease' 
                                        src='https://cdn-icons-png.flaticon.com/128/43/43625.png'
                                        onClick={() => decreaseStars(this.props.movies)} 
                                        />
                                <img className='stars' alt='star' src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png' />
                                <img className='str-btn' alt='increase' 
                                        src='https://cdn-icons-png.flaticon.com/128/1828/1828925.png' 
                                        onClick={() => increaseStars(this.props.movies)}/>

                                <span>{stars}</span>
                            </div>

                            {
                               fav?<button className='unfavourite-btn' onClick={() => handleFav(this.props.movies)}>Un-Favourite</button>:
                               <button className='favourite-btn' onClick={() => handleFav(this.props.movies)}>Favourite</button> 
                            }
                            {
                                inCart?<button className='unfavourite-btn' onClick={() => handleCartBtn(this.props.movies, -1)}>Remove from cart</button>:
                                <button className='cart-btn' onClick={() => handleCartBtn(this.props.movies, 1)}>Add to cart</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;