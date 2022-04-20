import React from 'react';
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
    Autoplay, Navigation, Pagination
} from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import movie1 from '../../../../assets/videos/movie1.mp4';
import movie2 from '../../../../assets/videos/movie2.mp4';
import movie3 from '../../../../assets/videos/movie3.mp4';
import Trailer from '../../../../components/trailer/trailer';
import './movieRun.css';



SwiperCore.use([Autoplay, Pagination, Navigation]);

movieRun.propTypes = {

};
const moviesSlide=[
    {
        id:1,
        name:" Hacksaw Ridge",
        digital:"2D",
        movieDemo:movie1,
        movieLink:"https://www.youtube.com/embed/s2-1hz1juBI",
    },
    {
        id:2,
        name:"Docter Stranger 2",
        digital:"3D",
        movieDemo:movie2,
        movieLink:"https://youtu.be/3xccmeAsy8g",
    },
    {
        id:3,
        name:"Godzilla vs. Kong",
        digital:"IMAX",
        movieDemo:movie3,
        movieLink:"https://www.youtube.com/embed/odM92ap8_c0",
    },
]

function movieRun() {
    

    return (
        <Swiper className="movietrailer movie-container movietrailer" loop={true} centeredSlides={true} autoplay={{
            "delay": 30000,
            "disableOnInteraction": false
        }} pagination={{
            "clickable": true
        }} navigation={true}>
                {moviesSlide.map((movie,index)=>(
                    <SwiperSlide className="movie-slideshow" key={movie.id}>
                        <section className="movierun" >
                            <div>
                                <video src={movie.movieDemo} muted="true" autoplay="true" loop="true" ></video>
                                <div className="overlay"></div>
                                <div className="slideshowmovie--content">
                                    <div className="slideshowmovie--content__imdb d-flex align-items-center">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <div className="slideshowmovie--content__name">
                                        {movie.name}
                                    </div>
                                    <div className="slideshowmovie--content__digital">{movie.digital} Digital</div>
                                    <div className="slideshowmovie--content__watch d-flex align-items-center">
                                        <Trailer trailer={movie.movieLink}></Trailer>
                                        <div className="slideshowmovie--content__watch-title">Xem trailer</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        
                    </SwiperSlide>
                ))}
        </Swiper>
    );
}

export default movieRun;