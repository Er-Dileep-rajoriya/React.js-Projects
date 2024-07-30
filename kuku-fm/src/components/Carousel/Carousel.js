import React from "react";
import Slider from "react-slick";
import "./carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieCarousel = ({ sliderData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1900,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="movie-carousel">
      <Slider {...settings}>
        {sliderData.map((data, index) => (
          <div key={index} className="movie-item">
            <img src={data.image} alt={data.title} />
            <div className="movie-title">{data.title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieCarousel;
